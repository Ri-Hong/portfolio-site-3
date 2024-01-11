/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";
import Footer from "./footer";
import AboutMDX from "../sections/about.mdx";

const BottomContent = ({ offset, factor = 1 }) => {
  const [svgHeight, setSvgHeight] = useState(538.05);
  const [svgWidth, setSvgWidth] = useState(800);

  // Used for resizing the wave svg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSvgHeight(250);
        setSvgWidth(400);
      } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
        setSvgHeight(275);
        setSvgWidth(400);
      } else if (window.innerWidth > 1200 && window.innerWidth < 1600) {
        setSvgHeight(270);
        setSvgWidth(400);
      } else if (window.innerWidth > 1600 && window.innerWidth < 2000) {
        setSvgHeight(270);
        setSvgWidth(400);
      } else if (window.innerWidth > 2000 && window.innerWidth < 2400) {
        setSvgHeight(250);
        setSvgWidth(400);
      } else if (window.innerWidth > 2400) {
        setSvgHeight(400);
        setSvgWidth(400);
        console.log("here");
      }
    };

    // Set up resize listener
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Divider
        fill="divider"
        speed={-0.2}
        offset={offset}
        factor={factor}
        sx={{
          zIndex: 1, // Ensure this divider is below the wave
        }}
        // clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      >
        <div
          sx={{
            position: `absolute`,
            bottom: `0`,
            width: `full`,
            transform: `matrix(1, 0, 0, -1, 0, 0)`,
          }}
        >
          <div
            sx={{
              position: `relative`,
              height: `full`,
              svg: { width: `100%`, height: `40vh` },
              path: { animation: waveAnimation(`20s`) },
              padding: [0, 0, 0, 0],
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="contact-wave"
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="none"
              style={{ transform: "scaleX(-1)" }}
            >
              <path>
                <animate
                  attributeName="d"
                  values="M 0 158 Q 248 246 400 200 Q 551 142 801 219 L 800 0 L 0 0 L 0 158 Z;
                  M 0 168 Q 250 143 400 200 Q 548 260 801 193 L 800 0 L 0 0 L -1 167 Z;
                  M 0 158 Q 248 246 400 200 Q 551 142 801 219 L 800 0 L 0 0 L 0 158 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </div>
        </div>
      </Divider>
      <Content
        sx={{
          variant: `texts.small`,
          height: "20px",
          // padding: [0, 0, 0, 0],
          // border: `3px solid yellow`,
        }}
        speed={0.4}
        offset={offset}
        factor={factor}
      >
        <h2
          sx={{
            mb: [4, 4, 4, 5],
            width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
            textAlign: `left`,
          }}
        >
          About
        </h2>
        <Inner sx={{ mb: [5, 6, 7] }}>
          <AboutMDX />
        </Inner>
      </Content>
      <Footer />
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_red"
            left="70%"
            top="0%"
          />
          <Svg
            icon="triangle"
            width={48}
            stroke
            color="icon_orange"
            left="25%"
            top="-30%"
          />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="triangle"
            width={12}
            stroke
            color="icon_purple"
            left="95%"
            top="0%"
          />
          <Svg
            icon="circle"
            width={6}
            color="icon_orange"
            left="85%"
            top="15%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <Svg icon="circle" width={6} color="icon_pink" left="4%" top="0%" />
        <Svg icon="circle" width={12} color="icon_red" left="70%" top="60%" />
        <Svg icon="box" width={12} color="icon_green" left="20%" top="70%" />
        <Svg
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
    </div>
  );
};

export default BottomContent;
