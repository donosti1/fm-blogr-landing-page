import React from "react";
import {Stack} from "@chakra-ui/react";

import Phrase from "./components/Phrase";
import TopFeaturesDescription from "./components/TopFeaturesDescription";

const featuresItems = [
  {
    id: 0,
    title: "Quick Search",
    feature:
      "Easily search your snippets by content, category, web address, application, and more. ",
  },
  {
    id: 1,
    title: "iCloud Sync",
    feature: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    id: 2,
    title: "Complete History",
    feature: "Retrieve any snippets from the first moment you started using the app.",
  },
];
const TopFeatures = () => {
  const items = featuresItems.map((it) => <TopFeaturesDescription key={it.id} {...it} />);

  return (
    <>
      <Stack
        backgroundImage="url('/assets/image-computer.png')"
        backgroundPosition={["50%  35%", "-25%  100%", "-4%  100%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["90%", "60%", "50%"]}
        className="TopFeatures"
        spacing={[80, 24, 28]}
        width="100%"
      >
        <Stack>
          <Phrase
            phrase="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
            title="Keep track of your snippets"
          />
        </Stack>
        <Stack direction="row-reverse" paddingBottom={[8, 28, 24]} paddingRight={[0, 32]}>
          <Stack spacing={12} width={["100%", "35%"]}>
            {items}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TopFeatures;
