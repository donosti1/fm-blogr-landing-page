import React from "react";
import {Image, Stack} from "@chakra-ui/react";

import Phrase from "./components/Phrase";

const Services = () => {
  return (
    <>
      <Stack className="Services" paddingBottom={8} paddingTop={32}>
        <Phrase
          phrase="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
          title="Access Clipboard anywhere"
        />
        <Image alt="devices" paddingTop={8} src="/assets/image-devices.png" />
      </Stack>
    </>
  );
};

export default Services;
