import React from "react";
import {Image, Stack} from "@chakra-ui/react";

import FeaturesDescription from "./components/FeaturesDescription";
import TopPhrase from "./components/TopPhrase";

import Pattern from "/assets/bg-pattern-circles.svg";

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
  const items = featuresItems.map((it) => <FeaturesDescription key={it.id} {...it} />);

  return (
    <>
      <Stack
        backgroundImage={[
          "url('/assets/illustration-editor-mobile.svg')",
          "url('/assets/illustration-editor-desktop.svg')",
        ]}
        backgroundPosition={["50%  22%", "-25%  100%", "138%  60%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["100%", "56%"]}
        className="TopFeatures"
        paddingBottom={[8, 28, 24]}
        spacing={[0, 0]}
        width="100%"
      >
        <Stack paddingTop={[24, 32]}>
          <TopPhrase title="Designed for the future" />
        </Stack>
        <Stack
          direction="row"
          paddingBottom={[52, 28, 24]}
          paddingLeft={[6, 32]}
          paddingRight={[6, 0]}
          paddingTop={[96, 28, 24]}
        >
          <Stack spacing={12} width={["100%", "42%"]}>
            {items}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TopFeatures;
