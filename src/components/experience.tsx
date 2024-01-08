/** @jsxImportSource theme-ui */

import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
import ExperienceMDX from "../sections/experience.mdx";

const Experience = ({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset - 0.1}
      factor={factor}
    />

    <Content
      sx={{ variant: `texts.big` }}
      speed={0.4}
      offset={offset - 0.1}

      factor={factor}
    >
      <h2
        sx={{
          mb: 5,
          width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
          textAlign: `left`,
        }}
      >
        Experience
      </h2>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5], // adjust your grid gap as needed
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`], // set up the columns
            // "> *:nth-of-type(odd)": {
            //   "@media screen and (min-width: 600px)": { // This is the media query for non-mobile devices
            //     transform: "translateY(50px)",
            //     "&:hover": {
            //       transform: `translateY(40px)`,
            //     },
            //   },
            // },
            // ENABLE THE ABOVE WHEN THERE IS MROE THAN 1 EXPERIENCE CARD
          }}
        >
          <ExperienceMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset - 0.1} factor={factor}>
      <UpDown>
        <Svg icon="box" width={6} color="icon_pink" left="60%" top="90%" />
        <Svg icon="upDown" width={8} color="icon_yellow" left="30%" top="15%" />
        <Svg icon="triangle" width={8} stroke color="icon_blue" left="75%" top="10%" />
        <Svg icon="circle" hiddenMobile width={24} color="icon_orange" left="20%" top="50%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_red" left="80%" top="70%" />
        <Svg icon="triangle" width={12} stroke color="icon_green" left="10%" top="20%" />
        <Svg icon="circle" width={16} color="icon_purple" left="50%" top="85%" />
        <Svg icon="triangle" hiddenMobile width={16} stroke color="icon_darker" left="65%" top="30%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="85%" top="45%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="40%" top="60%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_teal" left="10%" top="75%" />
      <Svg icon="circle" width={12} color="icon_darker" left="20%" top="35%" />
      <Svg icon="box" width={6} color="icon_red" left="85%" top="20%" />
      <Svg icon="box" width={12} color="icon_blue" left="40%" top="10%" />
      <Svg icon="hexa" width={16} stroke color="icon_orange" left="70%" top="55%" />
      <Svg icon="hexa" width={8} stroke color="icon_pink" left="30%" top="70%" />
    </Divider>
  </div>
);

export default Experience;
