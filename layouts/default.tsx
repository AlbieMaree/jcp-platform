import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/components/theme-switch";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <ThemeSwitch className="mr-4" />
        <span className="text-default-600 mr-4 ml-80">Powered by</span>
        <p className="text-primary mr-80">Community</p>
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/faq"
        >
          FAQ
        </Link>
      </footer>
    </div>
  );
}
