"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["/", "Home"],
  ["/todos", "Todos"],
  ["/dashboard", "Dashboard"],
  ["/playground/a", "Playground"],
  ["/help/todos/create", "Help"],
  ["/archive", "Archive"],
  ["/login", "Login"],
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav aria-label="Main navigation">
        {links.map(([href, label]) => {
          const base =
            href === "/playground/a"
              ? "/playground"
              : href === "/help/todos/create"
                ? "/help"
                : href;
          const active =
            pathname === base ||
            (base !== "/" && pathname.startsWith(base + "/"));
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={active ? "active" : ""}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
