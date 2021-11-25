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
      100: "hsl(240, 2%, 79%)",
      500: "hsl(207, 13%, 34%)",
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
  },
});
