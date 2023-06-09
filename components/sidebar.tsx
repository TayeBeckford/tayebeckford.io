"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog")) {
    pathname = "/blog";
  }

  return (
    <aside className="flex flex-col md:flex-row md:flex-shrink-0 md:pl-3 md:mx-0 lg:ml-10 font-serif">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative max-w-[350px]"
            id="nav">
            <div className="h-full flex flex-row md:flex-col space-x-0 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive,
                        "font-bold": isActive,
                      }
                    )}>
                    <span className="relative text-lg px-[10px] md:px-0 py-[10px]">
                      {name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
      <div className="h-[0.1em] md:h-full max-w-[665px] md:w-[0.1em] bg-neutral-500 ml-1 mt-2 md:ml-6 md:mr-8" />
    </aside>
  );
}
