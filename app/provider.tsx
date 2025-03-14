import React from "react";
import { headers } from "next/headers";
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";


type Props = {
  children: React.ReactNode;
};

const Provider = async ({ children }: Props) => {
  
  await headers();

  
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
