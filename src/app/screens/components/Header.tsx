import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
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
      <MenuItem key={mi.id} _focus={{fontWeight: "900"}} fontFamily="Ubuntu">
        {mi.label}
      </MenuItem>
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
            <MenuList lineHeight="1.1" minWidth={44} paddingX={4} paddingY={6}>
              {productMenuList}
            </MenuList>
          </>
        )}
      </Menu>
    );
  };
  const AccordionMenuItem = (props: menuComponents) => {
    const productMenuList = props.menuItems.map((mi) => <div key={mi.id} className="Test" />);

    return (
      <>
        <Text>Hola</Text>
        {/* <Menu>
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
            <MenuList lineHeight="1.1" minWidth={44} paddingX={4} paddingY={6}>
              {productMenuList}
            </MenuList>
          </>
        )}
      </Menu> */}
      </>
    );
  };
  /* const navBar = navItems.map((ni) => (
    <Text
      key={ni.id}
      _hover={{cursor: "pointer", color: "primary.500"}}
      textAlign={["center", "left"]}
    >
      {ni.label}
    </Text>
  ));
   */ const MenuToggle = ({toggle, isOpen}: {toggle: any; isOpen: any}) => {
    return (
      <Box display={["flex", "none"]} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  };
  const CloseIcon = () => (
    <svg fill="white" viewBox="0 0 18 18" width="24" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg fill="white" viewBox="0 0 20 20" width="24px" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  return (
    <>
      <Stack
        alignItems="center"
        as="header"
        className="Header"
        direction="row"
        justifyContent="space-between"
        paddingTop={[6, 16]}
        paddingX={[6, 0]}
        position={["fixed", "relative"]}
        width={["100%", "container.lg"]}
        zIndex="100"
      >
        <Image alt="logo" height={[10, 10]} src="/assets/logo.svg" width={[24, 24]} />
        <Stack
          direction="row"
          display={["none", "flex"]}
          justifyContent="space-between"
          paddingLeft={16}
          width="100%"
        >
          <Stack alignItems="center" direction="row">
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
        </Stack>
        <MenuToggle isOpen={mobileMenuIsOpen} toggle={toggleMobileMenu} />
      </Stack>
      {mobileMenuIsOpen && (
        <Stack
          alignItems="center"
          backgroundColor="blackAlpha.600"
          height="100%"
          position="absolute"
          spacing={0}
          top={0}
          width="100%"
          zIndex="90"
        >
          <Stack
            backgroundColor="#fffbf8"
            borderRadius="xl"
            color="secondary.600"
            divider={<StackDivider role="separator" />}
            overflow={mobileMenuIsOpen ? "hidden" : "unset"}
            position="fixed"
            spacing={0}
            top={20}
            width="90%"
            zIndex="100"
          >
            <Stack>
              <Accordion>
                <AccordionMenuItem menuItems={productMenuItems} menuLabel="Product" />
                <AccordionMenuItem menuItems={companyMenuItems} menuLabel="Company" />
                <AccordionMenuItem menuItems={connectMenuItems} menuLabel="Connect" />
              </Accordion>
            </Stack>
            <Stack direction="column">
              <Button variant="header-link">Login</Button>
              <Button variant="header-button">Sign Up</Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Header;
