import React from "react";
import {Button, Grid, Icon, Image, Stack, Text} from "@chakra-ui/react";

import Logo from "/assets/logo.svg";

import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";

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
    <Button key={mi.id} color="secondary.100" fontSize="sm" variant="footer-link">
      {mi.label}
    </Button>
  ));

  return (
    <Stack alignItems="flex-start" spacing={4}>
      <Button fontWeight="700" variant="footer-link">
        {props.menuLabel}
      </Button>
      <Stack alignItems="flex-start" spacing={0}>
        {productMenuList}
      </Stack>
    </Stack>
  );
};
const Footer = () => {
  return (
    <>
      <Stack
        backgroundColor="primary.900"
        direction={["column", "row"]}
        justifyContent="space-between"
        paddingX={[4, 32]}
        paddingY={[4, 8]}
        spacing={[12, 0]}
        width="100%"
      >
        <Image alt="logo" height={[32, 10]} src="assets/logo.svg" width={[32, 24]} />
        <CustomMenuItem menuItems={productMenuItems} menuLabel="Product" />
        <CustomMenuItem menuItems={companyMenuItems} menuLabel="Company" />
        <CustomMenuItem menuItems={connectMenuItems} menuLabel="Connect" />
      </Stack>
    </>
  );
};

export default Footer;
