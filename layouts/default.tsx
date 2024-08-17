import React from "react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "next-themes";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="relative flex flex-col min-h-screen bg-cover bg-fixed overflow-hidden">
      <Head />
      <Navbar className="fixed top-0 left-0 z-50 w-full" />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 bg-cover z-10">
        <ThemeSwitch className="mr-4" />
        <span className="text-default-600 mr-4">Powered by</span>
        <p className="text-primary mr-4">Community</p>
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/faq">
          FAQ
        </Link>
      </footer>
      <div
        className="absolute inset-0 z-0 bg-cover bg-fixed"
        style={{
          backgroundImage: theme === 'dark' 
            ? "url('/images/dark-background.png')" 
            : "url('/images/light-background.jpg')",
        }}
      >
       <div className="absolute inset-0 backdrop-blur-md"></div>
      </div>
    </div>
  );
}
