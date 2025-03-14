/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { DefaultSession } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import db from "./lib/db";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role?: string;
    };
  }
}



declare module "next-auth" {
  interface User {
    role?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        
        token.id = user.id;
        token.role = user.role || "USER";
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
   
        if (session.user) {
          session.user.id = token.id as string;
          session.user.role = token.role as string;
        }
      }

      return session;
    },

    redirect() {
      return "/signin";
    },
  },
});
