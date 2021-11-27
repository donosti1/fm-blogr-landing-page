import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";
/* import {BsAlarm} from "react-icons/bs"; */

import Hero from "./screens/Hero";
import TopFeatures from "./screens/TopFeatures";
import Services from "./screens/Services";
import Features from "./screens/Features";
import Carousel from "./screens/Carousel";
import BottomCTA from "./screens/BottomCTA";
import Footer from "./screens/Footer";
/* State of the Art Infrastructure With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive. Free, open, simple Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn. Powerful tooling Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites. Product Overview Pricing Marketplace Features Integrations Company About Team Blog Careers Connect Contact Newsletter LinkedIn */
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
