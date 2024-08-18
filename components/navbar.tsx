import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import React from "react";
import { ButtonGroup } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className={className}>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="w-full absolute h-24 backdrop-blur-lg bg-opacity-75"
        onMenuOpenChange={setIsMenuOpen}
      >
        <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
          <p className="font-bold text-inherit text-2xl">
            Joint community based project
          </p>
        </div>

        <NavbarContent className="flex items-center justify-between w-full mt-8 z-10">
          <div className="flex-shrink-0">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="ml-0"
            />
            {isMenuOpen && (
              <div className="absolute top-full left-0 z-50 w-auto shadow-lg p-4 mt-2 backdrop-blur-lg bg-opacity-75">
                <div className="flex flex-col">
                  {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                      <Link
                        color="foreground"
                        className="w-full"
                        href="/"
                        size="lg"
                      >
                        {item}
                      </Link>
                    </NavbarMenuItem>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex-grow flex justify-center">
            <ButtonGroup className="mx-12">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  underline="hover"
                  className="mx-6 underline-offset-8 decoration-2 text-2xl"
                >
                  {item.label}
                </Link>
              ))}
            </ButtonGroup>
          </div>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
