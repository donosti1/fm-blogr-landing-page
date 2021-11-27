import React from "react";
import {Stack} from "@chakra-ui/react";

import Phrase from "./components/Phrase";
import TopFeaturesDescription from "./components/TopFeaturesDescription";
import TopPhrase from "./components/TopPhrase";

const featuresItems = [
  {
    id: 0,
    title: "Introducing an extensible editor",
    feature:
      "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  },
  {
    id: 1,
    title: "Robust content management",
    feature:
      "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
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
        spacing={[80, 24, 8]}
        width="100%"
      >
        <Stack>
          <TopPhrase title="Designed for the future" />
        </Stack>
        <Stack direction="row" paddingBottom={[8, 28, 24]} paddingLeft={[0, 32]}>
          <Stack spacing={12} width={["100%", "42%"]}>
            {items}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TopFeatures;
