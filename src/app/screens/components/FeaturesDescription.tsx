import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface Feature {
  title: string;
  feature: string;
}
const FeaturesDescription = (props: Feature) => {
  return (
    <>
      <Stack alignItems={["center", "flex-start"]} className="FeaturesDescription" spacing={2}>
        <Text
          as="h2"
          color="primary.500"
          fontSize="2xl"
          fontWeight="700"
          letterSpacing="-1px"
          paddingBottom={[4, 0]}
        >
          {props.title}
        </Text>
        <Text
          color="secondary.500"
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

export default FeaturesDescription;
