import React from "react";
import {Button, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

const Header = () => {
  const productMenuItems = [
    {id: 0, label: "Overview"},
    {id: 1, label: "Pricing"},
    {id: 2, label: "Marketplace"},
    {id: 3, label: "Features"},
    {id: 4, label: "Integrations"},
  ];
  const companyMenuItems = [
    {id: 0, label: "About"},
    {id: 1, label: "Team"},
    {id: 2, label: "Blog"},
    {id: 3, label: "Careers"},
  ];
  const connectMenuItems = [
    {id: 0, label: " Contact"},
    {id: 1, label: "Newsletter"},
    {id: 2, label: "LinkedIn"},
  ];

  interface menuComponents {
    menuLabel: string;
    menuItems: {id: number; label: string}[];
  }
  const CustomMenuItem = (props: menuComponents) => {
    const productMenuList = props.menuItems.map((mi) => (
      <MenuItem key={mi.id}>{mi.label}</MenuItem>
    ));

    return (
      <Menu>
        {({isOpen}) => (
          <>
            <MenuButton
              as={Button}
              rightIcon={
                <ChevronDownIcon
                  display="block"
                  transform={isOpen ? "rotate(-180deg)" : "rotate(0deg)"}
                  transition="linear .25s"
                />
              }
              variant="unstyled"
            >
              {props.menuLabel}
            </MenuButton>
            <MenuList>{productMenuList}</MenuList>
          </>
        )}
      </Menu>
    );
  };

  return (
    <Stack
      alignItems="center"
      as="header"
      className="Header"
      direction="row"
      justifyContent="space-between"
      paddingTop={[16, 16]}
      width="container.lg"
    >
      <Stack alignItems="center" direction="row" spacing={16}>
        <Image alt="logo" height={[32, 10]} src="assets/logo.svg" width={[32, 24]} />
        <Stack alignItems="center" direction="row">
          <CustomMenuItem menuItems={productMenuItems} menuLabel="Product" />
          <CustomMenuItem menuItems={companyMenuItems} menuLabel="Company" />
          <CustomMenuItem menuItems={connectMenuItems} menuLabel="Connect" />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Button variant="link">Login</Button>
        <Button variant="solid">Sign Up</Button>
      </Stack>

      {/* <Text
        as="h1"
        color="secondary.500"
        fontSize={["3xl", "5xl"]}
        fontWeight="700"
        letterSpacing="-1.5px"
        textAlign="center"
      >
        A history of everything you copy
      </Text>
      <Text
        color="secondary.200"
        fontSize={["md", "xl"]}
        maxWidth="container.md"
        textAlign="center"
      >
        Clipboard allows you to track and organize everything you copy. Instantly access your
        clipboard on all your devices.
      </Text> */}
    </Stack>
  );
};

export default Header;
