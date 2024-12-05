"use client";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  useColorMode,
  Link,
} from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={1}
      bgColor="gray"
      h="50px"
      alignItems="center"
      px={4}
      justifyContent="space-between"
    >
      <Menu>
        <MenuButton as={Button}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">About</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button}>
          <SettingsIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={toggleColorMode}>Change theme color</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
