import React from "react";
import {Stack} from "@chakra-ui/react";

import Phrase from "./components/Phrase";
import FeaturesDescription from "./components/FeaturesDescription";

const featuresItems = [
  {
    id: 0,
    title: "Free, open, simple",
    feature:
      "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
  },
  {
    id: 1,
    title: "Powerful tooling",
    feature:
      "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
  },
];
const Features = () => {
  const items = featuresItems.map((it) => <FeaturesDescription key={it.id} {...it} />);

  return (
    <>
      <Stack
        alignItems={["center", "flex-end"]}
        backgroundImage={[
          "url('/assets/illustration-laptop-mobile.svg')",
          "url('/assets/illustration-laptop-desktop.svg')",
        ]}
        backgroundPosition={["50%  5%", "-40%  50%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["100%", "60%"]}
        className="Features"
        paddingBottom={[24, 56]}
        paddingTop={[80, 64]}
        width="100%"
      >
        <Stack
          direction={["row", "row-reverse"]}
          justifyContent={["center", "flex-start"]}
          paddingRight={[0, 28]}
        >
          <Stack spacing={12} width={["80%", "68%"]}>
            {items}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Features;
