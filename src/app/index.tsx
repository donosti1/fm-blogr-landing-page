import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";
/* import {BsAlarm} from "react-icons/bs"; */

import Hero from "./screens/Hero";
import TopFeatures from "./screens/TopFeatures";
//import Services from "./screens/Services";
import Features from "./screens/Features";
import DarkFeatures from "./screens/DarkFeatures";
//import Carousel from "./screens/Carousel";
//import BottomCTA from "./screens/BottomCTA";
import Footer from "./screens/Footer";
/* 
  Product Overview Pricing Marketplace Features Integrations Company About Team Blog Careers Connect Contact Newsletter LinkedIn */
const App: React.FC = () => {
  /* const item = [{id: 0, icon: BsAlarm}];
  const icons = item.map((it) => <Icon key={it.id} as={it.icon} color="white" />); */
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
        {/*<Services />
        <Carousel />
        <BottomCTA /> */}

        {/* {icons} */}
      </Stack>
      <Footer />
    </>
  );
};

export default App;
