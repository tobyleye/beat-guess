import { background, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // config: {
  //   initialColorMode: "dark",
  //   useSystemColorMode: false,
  // },
  colors: {
    brand: {
      spotify: "#1DB954",
      spotifyHover: "#1ed760",
    },
    gray: {
      900: "#121212",
      800: "#181818",
      700: "#282828",
      600: "#3E3E3E",
      500: "#727272",
      400: "#A7A7A7",
      300: "#B3B3B3",
      200: "#C4C4C4",
      100: "#FFFFFF",
    },
  },
  styles: {
    global: {
      body: {
        background: "gray.900",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "md",
      },
      variants: {
        spotify: {
          bg: "brand.spotify",
          color: "white",
          _hover: {
            bg: "brand.spotifyHover",
            _disabled: {
              bg: "brand.spotify",
            },
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "gray.800",
          borderRadius: "md",
          overflow: "hidden",
        },
      },
    },
  },
});

export default theme;
