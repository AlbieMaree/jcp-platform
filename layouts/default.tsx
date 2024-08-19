// Layout.tsx
import React, { useEffect } from "react";
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
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!theme) {
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <div className="relative flex flex-col min-h-screen bg-cover bg-fixed overflow-hidden">
      <Head />
      <Navbar className="fixed top-0 left-0 z-50 w-full" />
      <main className="flex-grow pt-16 relative z-10">{children}</main>

      <footer className="w-full flex items-center justify-between h-40 py-3 bg-cover z-10 bg-black">
        <div className="flex items-center ml-5">
          <ThemeSwitch className="mr-4" />
        </div>

        <div className="flex items-center flex-grow justify-center space-x-96">
          <div className="text-2xl space-y-4 text-white">
            <p>Social media</p>
            <p>NO</p>
          </div>
          <div className="flex items-center text-white">
            <span className="mr-4 text-white">Powered by</span>
            <p className="text-primary mr-4">Community</p>
          </div>
          <div className="text-2xl space-y-4 text-white">
            <p>Our partners</p>
            <p>NO</p>
          </div>
        </div>

        <div className="mr-5">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/faq"
          >
            FAQ
          </Link>
        </div>
      </footer>

      <div
        className="absolute inset-0 z-0 bg-cover bg-fixed"
        style={{
          backgroundImage:
            theme === "dark" ? "url('/images/dark-background.png')" : "",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-md"></div>
      </div>
    </div>
  );
}
