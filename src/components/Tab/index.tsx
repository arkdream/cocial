import React from "react";
import { useRouter } from "next/router";
import cx from "classnames";
import { isActive } from "@/utils";

interface TabProps {
  label: string;
  icon?: React.ReactNode;
  href: string;
  alert?: string;
}

export function Tab({ label, icon, href, alert }: TabProps) {
  const { route } = useRouter();
  return (
    <button
      className={cx(
        "flex items-center rounded-theme gap-4 min-w-[200px] duration-theme transition-all bg-theme-background-light dark:bg-theme-background-dark max-w-max px-4 py-3  text-theme-text-light dark:text-theme-text-dark hover:text-white hover:bg-theme-secondary",
        isActive(route, href) &&
          "bg-theme-secondary text-white dark:bg-theme-secondary"
      )}
    >
      {icon && icon}
      <span>{label}</span>
      {alert && (
        <span className="block w-5 text-sm bg-red-500 rounded-full aspect-square shrink-0 text-theme-foreground-light">
          {alert}
        </span>
      )}
    </button>
  );
}
