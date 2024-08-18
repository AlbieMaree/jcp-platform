import React from "react";
import { Switch } from "@nextui-org/react";
import { WiMoonWaxingCrescent4, WiMoonWaningCrescent4 } from "react-icons/wi";
import { useTheme } from "next-themes";
import clsx from "clsx";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: any;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className, classNames }) => {
  const { theme, setTheme } = useTheme();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <Switch
      defaultSelected={theme === "dark"}
      size="lg"
      color="default"
      onChange={onChange}
      startContent={<WiMoonWaxingCrescent4 />}
      endContent={<WiMoonWaningCrescent4 />}
      className={clsx(
        "px-px transition-opacity hover:scale-110 cursor-pointer",
        className,
        classNames,
      )}
    ></Switch>
  );
};

export { ThemeSwitch };
