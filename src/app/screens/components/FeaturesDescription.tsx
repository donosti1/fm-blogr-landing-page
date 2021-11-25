import React from "react";
import {Image, Stack, Text} from "@chakra-ui/react";
interface FeatureWithIcon {
  title: string;
  iconUrl: string;
  feature: string;
}
const FeaturesDescription = (props: FeatureWithIcon) => {
  const icon = `/assets/${props.iconUrl}`;

  return (
    <>
      <Stack alignItems={["center", "center"]} className="FeaturesDescription" spacing={2}>
        <Stack alignItems="center" height={16}>
          <Image alt="icon" src={icon} />
        </Stack>
        <Text as="h2" color="secondary.500" fontSize="2xl" fontWeight="700" letterSpacing="-1px">
          {props.title}
        </Text>
        <Text
          color="secondary.200"
          fontSize="md"
          lineHeight="2.0"
          maxWidth="container.sm"
          textAlign={["center", "center"]}
        >
          {props.feature}
        </Text>
      </Stack>
    </>
  );
};

export default FeaturesDescription;
