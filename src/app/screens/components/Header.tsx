import React, {useEffect, useState} from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
    const productMenuList = props.menuItems.map((mi) => (
      <Button key={mi.id} variant="mobile-menu-link">
        {mi.label}
      </Button>
    ));

    return (
      <>
        <AccordionItem _last={{borderTopWidth: 0}} borderTopWidth={0}>
          <h2>
            <AccordionButton
              _focus={{outline: "1px #ccc dotted"}}
              _hover={{backgroundColor: "transparent"}}
              color="primary.500"
              fontFamily="Ubuntu"
              fontSize="lg"
              fontWeight="700"
              justifyContent="center"
            >
              <Box paddingRight={2}>{props.menuLabel}</Box>
              <AccordionIcon color="primary.400" />
            </AccordionButton>
          </h2>
          <AccordionPanel background="secondary.50" borderRadius="md" pb={4} width="100%">
            <Stack>{productMenuList}</Stack>
          </AccordionPanel>
        </AccordionItem>
      </>
    );
  };
  const MenuToggle = ({toggle, isOpen}: {toggle: any; isOpen: any}) => {
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Stack
        alignItems="center"
        as="header"
        backgroundColor={scrollPosition > 64 ? "hsla(355, 100%, 74%,.90)" : "transparent"}
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
          backgroundColor="hsla(355, 100%, 74%,.90)"
          height="100%"
          position="absolute"
          spacing={0}
          top={0}
          width="100%"
          zIndex="90"
        >
          <Stack
            alignItems="center"
            backgroundColor="#fffbf8"
            borderRadius="xl"
            color="secondary.600"
            overflow={mobileMenuIsOpen ? "hidden" : "unset"}
            paddingY={8}
            position="fixed"
            spacing={0}
            top={20}
            width="90%"
            zIndex="100"
          >
            <Stack
              alignItems="center"
              divider={<StackDivider alignSelf="center" role="separator" width="80%" />}
              width="100%"
            >
              <Stack width="90%">
                <Accordion allowToggle>
                  <AccordionMenuItem menuItems={productMenuItems} menuLabel="Product" />
                  <AccordionMenuItem menuItems={companyMenuItems} menuLabel="Company" />
                  <AccordionMenuItem menuItems={connectMenuItems} menuLabel="Connect" />
                </Accordion>
              </Stack>
              <Stack direction="column">
                <Button
                  fontFamily="Ubuntu"
                  fontSize="lg"
                  fontWeight="700"
                  paddingY={6}
                  variant="mobile-menu-link"
                >
                  Login
                </Button>
                <Button variant="mobile-menu-button">Sign Up</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Header;
