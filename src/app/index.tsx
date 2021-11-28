import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";
/* import {BsAlarm} from "react-icons/bs"; */

import Hero from "./screens/Hero";
import TopFeatures from "./screens/TopFeatures";
import Features from "./screens/Features";
import DarkFeatures from "./screens/DarkFeatures";
import Footer from "./screens/Footer";

const App: React.FC = () => {
  /* React Icon as item prop (Not used in current project) 
  const item = [{id: 0, icon: BsAlarm}];
  const icons = item.map((it) => <Icon key={it.id} as={it.icon} color="white" />); 
  {icons}
  */

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, []);

  return (
    <>
      <Stack alignItems="center" role="main" spacing={0}>
        <Hero />
        <TopFeatures />
        <DarkFeatures />
        <Features />
      </Stack>
      <Footer />
    </>
  );
};

export default App;
