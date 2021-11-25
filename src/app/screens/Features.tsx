import React from "react";
import {Stack} from "@chakra-ui/react";

import Phrase from "./components/Phrase";
import FeaturesDescription from "./components/FeaturesDescription";
const featuresItems = [
  {
    id: 0,
    iconUrl: "icon-blacklist.svg",
    title: "Create blacklists",
    feature:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    id: 1,
    iconUrl: "icon-text.svg",
    title: "Plain text snippets",
    feature: "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    id: 2,
    iconUrl: "icon-preview.svg",
    title: "Sneak preview",
    feature: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const Features = () => {
  const items = featuresItems.map((it) => <FeaturesDescription key={it.id} {...it} />);

  return (
    <>
      <Stack className="Features" paddingX={[0, 32]}>
        <Phrase
          phrase="We’ve got the tools to boost your productivity."
          title="Supercharge your workflow"
        />
        <Stack direction={["column", "row"]} spacing={[16, 6]}>
          {items}
        </Stack>
      </Stack>
    </>
  );
};

export default Features;
