import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

import Layout from "@theme/Layout";

import { ThemeUIProvider } from "theme-ui";
import theme from "../theme-ui/index"; // Your theme file

import { Parallax } from "@react-spring/parallax";
import ParallaxLayout from "../components/parallax-layout";
import ThemeWatcher from "../components/theme-watcher";
import ConditionalScrollbar from "../components/conditional-scrollbar";

import Hero from "../components/hero";
import Projects from "../components/projects";
import BottomContent from "../components/bottom-content";

import Experience from "../components/experience";
import Hackathons from "../components/hackathons";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  // Define a function for the main content which needs the window object
  const MainContent = () => {
    const isMobile = window.innerWidth <= 768;

    return (
      <ParallaxLayout>
        <Parallax pages={isMobile ? 8.2 : 7} className={"parallax"}>
          <Hero offset={0} factor={1} />
          <Projects offset={1} factor={isMobile ? 3 : 2} />
          <Experience offset={isMobile ? 4 : 3} factor={2} />
          <Hackathons offset={isMobile ? 5 : 4} factor={2} />
          <BottomContent
            offset={isMobile ? 7 : 6}
            factor={isMobile ? 1.2 : 1}
          />
        </Parallax>
      </ParallaxLayout>
    );
  };
  return (
    <ThemeUIProvider theme={theme}>
      <Layout
        // title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <ThemeWatcher />
        <ConditionalScrollbar />
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => <MainContent />}
        </BrowserOnly>
      </Layout>
    </ThemeUIProvider>
  );
}
