import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface Feature {
  title: string;
  feature: string;
}
const DarkFeaturesDescription = (props: Feature) => {
  return (
    <>
      <Stack alignItems={["center", "flex-start"]} className="DarkFeaturesDescription" spacing={2}>
        <Text
          as="h2"
          color="white"
          fontSize={["3xl", "4xl"]}
          fontWeight="700"
          letterSpacing="-1px"
          textAlign={["center", "left"]}
        >
          {props.title}
        </Text>
        <Text
          color="white"
          fontSize="md"
          lineHeight="1.8"
          maxWidth="container.md"
          textAlign={["center", "left"]}
        >
          {props.feature}
        </Text>
      </Stack>
    </>
  );
};

export default DarkFeaturesDescription;
