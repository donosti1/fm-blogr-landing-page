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
    <Stack alignItems={["center", "flex-start"]} spacing={[0, 4]}>
      <Button fontSize="sm" variant="footer-link">
        {props.menuLabel}
      </Button>
      <Stack alignItems={["center", "flex-start"]} spacing={0}>
        {productMenuList}
      </Stack>
    </Stack>
  );
};
const Footer = () => {
  return (
    <>
      <Stack
        alignItems={["center", "flex-start"]}
        backgroundColor="primary.900"
        borderTopRightRadius={92}
        direction={["column", "row"]}
        paddingX={[4, 32]}
        paddingY={[16, 12]}
        spacing={[12, 44]}
        width="100%"
      >
        <Image alt="logo" height={[16, 10]} src="assets/logo.svg" width={[32, 24]} />
        <Stack direction={["column", "row"]} spacing={[8, 36]}>
          <CustomMenuItem menuItems={productMenuItems} menuLabel="Product" />
          <CustomMenuItem menuItems={companyMenuItems} menuLabel="Company" />
          <CustomMenuItem menuItems={connectMenuItems} menuLabel="Connect" />
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
