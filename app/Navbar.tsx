"use client";

import { Box, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { ImBug } from "react-icons/im";
import NavLinks from "./NavLinks";
import UserNavDropDown from "./UserNavDropDown";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <ImBug />
            </Link>
            <NavLinks />
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
