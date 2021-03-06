import React from "react";
import {Button, Image, Stack, Text} from "@chakra-ui/react";

/* import Logo from "/assets/logo.svg"; */

import Header from "./components/Header";
import Buttons from "./components/Buttons";
const Hero = () => {
  return (
    <Stack
      alignItems="center"
      backgroundImage="url('/assets/bg-pattern-intro.svg'),linear-gradient(to right,hsl(13, 100%, 72%),hsl(353, 100%, 62%))"
      backgroundPosition={["34% 38%", "23% 52%"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["350%", "250%"]}
      borderBottomLeftRadius={92}
      minHeight="90vh"
      role="header"
      spacing={0}
      width="100%"
    >
      <Header />
      <Text
        as="h1"
        color="white"
        fontSize={["4xl", "6xl"]}
        fontWeight="600"
        paddingTop={[36, 32]}
        paddingX={[6, 0]}
        textAlign={["center", "left"]}
      >
        A modern publishing platform
      </Text>
      <Text
        color="white"
        fontSize="xl"
        fontWeight="400"
        paddingTop={2}
        paddingX={[6, 0]}
        textAlign={["center", "left"]}
      >
        Grow your audience and build your online brand
      </Text>
      <Stack direction="row" paddingTop={12} spacing={4}>
        <Button variant="solid">Start for Free</Button>
        <Button variant="outline">Learn More</Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
