import React from "react";
import {Image, Stack} from "@chakra-ui/react";

import DarkFeaturesDescription from "./components/DarkFeaturesDescription";

const featuresItems = [
  {
    id: 0,
    title: "State of the Art Infrastructure",
    feature:
      "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
  },
];
const DarkFeatures = () => {
  const items = featuresItems.map((it) => <DarkFeaturesDescription key={it.id} {...it} />);

  return (
    <>
      <Stack
        alignItems={["center", "flex-end"]}
        backgroundColor="secondary.700"
        backgroundImage="url('/assets/bg-pattern-circles.svg')"
        backgroundPosition={["50%  -580%", "-59%  82%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["140%", "74%"]}
        borderBottomLeftRadius={92}
        borderTopRightRadius={92}
        className="DarkFeatures"
        /* spacing={[80, 24, 28]} */
        position="relative"
        width="100%"
      >
        <Image
          alt="phones"
          left={[null, 32]}
          position="absolute"
          src="/assets/illustration-phones.svg"
          top={[-44, -16]}
          width={["95%", "40%"]}
        />
        <Stack
          direction={["row", "row-reverse"]}
          justifyContent={["center", "flex-start"]}
          paddingBottom={[24, 24]}
          paddingRight={[0, 28]}
          paddingTop={[48, 28, 24]}
        >
          <Stack spacing={12} width={["80%", "68%"]}>
            {items}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default DarkFeatures;
