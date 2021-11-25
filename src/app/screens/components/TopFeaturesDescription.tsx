import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface Feature {
  title: string;
  feature: string;
}
const TopFeaturesDescription = (props: Feature) => {
  return (
    <>
      <Stack alignItems={["center", "flex-start"]} className="TopFeaturesDescription" spacing={2}>
        <Text as="h2" color="secondary.500" fontSize="2xl" fontWeight="700" letterSpacing="-1px">
          {props.title}
        </Text>
        <Text
          color="secondary.200"
          fontSize="md"
          lineHeight="2.0"
          maxWidth="container.sm"
          textAlign={["center", "left"]}
        >
          {props.feature}
        </Text>
      </Stack>
    </>
  );
};

export default TopFeaturesDescription;
