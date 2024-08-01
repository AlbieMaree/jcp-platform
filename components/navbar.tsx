import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon
} from "@/components/icons";

export const Navbar = () => {
  return (
    <div>

      <div className="text-center mb-4 py-3">
        <p className="font-bold text-inherit text-4xl">Joint community based project</p>
      </div>

      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <ButtonGroup>
            {siteConfig.navItems.map((item) => (
              <Link href={item.href} className="mr-2 ml-2" key={item.label}>
                <Button color="primary" variant="ghost">{item.label}</Button>
              </Link>
            ))}
          </ButtonGroup>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
