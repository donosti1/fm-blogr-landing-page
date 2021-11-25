import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface PhraseComponents {
  title: string;
  phrase: string;
}
const Phrase = (props: PhraseComponents) => {
  return (
    <Stack alignItems="center" className="Phrase" paddingY={12} spacing={3}>
      <Text
        as="h1"
        color="secondary.500"
        fontSize={["3xl", "4xl"]}
        fontWeight="700"
        letterSpacing="-1px"
        textAlign={["center", "left"]}
      >
        {props.title}
      </Text>
      <Text
        color="secondary.200"
        fontSize={["md", "lg"]}
        maxWidth="container.md"
        textAlign="center"
      >
        {props.phrase}
      </Text>
    </Stack>
  );
};

export default Phrase;
