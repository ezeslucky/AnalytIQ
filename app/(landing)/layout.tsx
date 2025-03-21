import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function PageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="relative bg-[#101010] w-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    );
  }