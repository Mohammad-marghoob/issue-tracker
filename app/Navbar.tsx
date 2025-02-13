"use client";

import { Box, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImBug } from "react-icons/im";
import UserNavDropDown from "./UserNavDropDown";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <ImBug />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={`
                      ${
                        link.href === currentPath
                          ? "text-zinc-900"
                          : "text-zinc-500"
                      }
                      hover:text-zinc-800 transition-colors`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            <UserNavDropDown />
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
