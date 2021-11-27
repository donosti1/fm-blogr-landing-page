import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface PhraseComponents {
  title: string;
}
const TopPhrase = (props: PhraseComponents) => {
  return (
    <Stack alignItems="center" className="Phrase" paddingY={12} spacing={3}>
      <Text
        as="h1"
        color="primary.500"
        fontSize={["3xl", "4xl"]}
        fontWeight="700"
        letterSpacing="-1px"
        textAlign={["center", "left"]}
      >
        {props.title}
      </Text>
    </Stack>
  );
};

export default TopPhrase;
