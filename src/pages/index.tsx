import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { ThemeUIProvider } from "theme-ui";
import theme from "../theme-ui/index"; // Your theme file

import { Parallax } from "@react-spring/parallax";
import ParallaxLayout from "../components/parallax-layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import BottomContent from "../components/bottom-content";
import ThemeWatcher from "../components/theme-watcher";
import Experience from "../components/experience";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <ThemeUIProvider theme={theme}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <ThemeWatcher />
        <ParallaxLayout>
          <Parallax pages={6}>
            <Hero offset={0} factor={1} />
            <Projects offset={1} factor={2} />
            <Experience offset={3} factor={2} />

            {/* <About offset={5} factor={1} /> */}
            {/* <Contact offset={6} factor={1} /> */}
            <BottomContent offset={5} factor={1}/>
          </Parallax>
        </ParallaxLayout>

        {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
      </Layout>
    </ThemeUIProvider>
  );
}
