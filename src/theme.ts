import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      300: "hsl(355, 100%, 74%)",
      400: "hsl(356, 100%, 66%)",
      500: "hsl(208, 49%, 24%)",
      900: "hsl(240, 10%, 16%)",
    },
    secondary: {
      50: "#eaeaec",
      100: "hsl(240, 2%, 79%)",
      500: "hsl(207, 13%, 34%)",
      700: "#393a58",
    },
  },
  sizes: {
    container: {
      sm: "360px",
      md: "720px",
      xl: "1440px",
    },
  },
  fonts: {
    body: "Overpass",
    heading: "Overpass",
    Menu: "Arial",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        height: 12,
      },
      variants: {
        "footer-link": {
          bg: "transparent",
          color: "white",
          h: 8,
          _hover: {
            textDecoration: "underline",
          },
        },
        "header-link": {
          bg: "transparent",
          color: "black",
          h: 8,
          _hover: {
            textDecoration: "underline",
          },
        },
        "header-button": {
          bg: "red",
          color: "white",
          h: 8,
          _hover: {
            textDecoration: "underline",
          },
        },
        "mobile-menu-link": {
          bg: "transparent",
          color: "primary.500",
          h: 8,
          _hover: {
            textDecoration: "underline",
          },
        },
        "mobile-menu-button": {
          bg: "linear-gradient(to right,hsl(13, 100%, 72%),hsl(353, 100%, 62%))",
          color: "white",
          fontWeight: "900",
          h: 12,
          px: 12,
          _hover: {
            textDecoration: "underline",
          },
        },
        link: {
          bg: "transparent",
          color: "white",
          width: 20,
          _hover: {
            fontWeight: "700",
          },
        },
        solid: {
          bg: "white",
          color: "primary.300",
          fontWeight: "700",
          px: 8,
          _hover: {
            bg: "primary.300",
            color: "white",
          },
        },
        unstyled: {
          width: 28,
          color: "white",
          _hover: {
            fontWeight: "700",
            textDecoration: "underline",
          },
        },
        outline: {
          fontWeight: "700",
          color: "white",
          px: 8,
          _hover: {
            bg: "white",
            color: "primary.300",
          },
        },
      },
      sizes: {
        lg: {
          h: 14,
          minW: 12,
          fontSize: "lg",
          px: 10,
        },
      },
    },
    MenuButton: {
      baseStyle: {
        color: "white",
      },
    },
    MenuItem: {
      baseStyle: {
        /* px: "0.8rem", */
        _active: {
          color: "white",
          bg: "black",
        },
      },
    },
    /* Accordion: {
      baseStyle: {
        
        
      },
    }, */
  },
});
