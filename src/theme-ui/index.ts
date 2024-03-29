import { merge, ThemeUIStyleObject } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"

declare module "theme-ui" {
  interface Theme {
    footer?: ThemeUIStyleObject
    texts?: ThemeUIStyleObject
  }
}

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `dark`,
  },
  // fontSizes: [
  //   12, // index 0
  //   14, // index 1
  //   16, // index 2
  //   18, // index 3
  //   24, // index 4
  //   32, // index 5
  //   48, // index 6
  //   64, // index 7
  //   72, // index 8
  // ],
  fontSizes: [
    14, // index 0 // set for about
    16, // index 1 // set for about
    20, // index 2 // set
    24, // index 3 // set for footer
    30, // index 4 // set
    32, // index 5 // set
    48, // index 6
    64, // index 7
    76, // index 8 // set
    76, // index 9
  ],
  // space: [
  //   0,    // index 0
  //   4,    // index 1
  //   8,    // index 2
  //   12,   // index 3
  //   16,   // index 4
  //   500,   // index 5
  //   24,   // index 6
  //   28,   // index 7
  //   32,   // index 8
  //   36,   // index 9
  //   // ... more values as needed
  // ],
  colors: {
    primary: tailwind.colors.orange[4],
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.gray[3],
    heading: tailwind.colors.white,
    background: `#141821`,
    divider: tailwind.colors.gray[8],
    textMuted: tailwind.colors.gray[5],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        primary: tailwind.colors.orange[7],
        background: tailwind.colors.gray[1],
        divider: tailwind.colors.gray[2],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[6],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      WebkitTextSizeAdjust: `100%`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
      img: {
        borderStyle: `none`,
      },
      pre: {
        fontFamily: `monospace`,
        fontSize: `1em`,
      },
      tbody: {
        backgroundColor: `rgba(100, 100, 100, 0)` // Disabled for now
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    // py: [3, 4],
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
      h1: {
        fontSize: [6, 7, 8],
      },
    },
    big: {
      h2: {
        fontSize: [4, 5, 6],
      },
      p: {
        fontSize: [1, 2],
      }
    },
    small: {
      p: {
        fontSize: [0, 0, 1, 1, 2],
      },
      h2: {
        fontSize: [4, 5, 6],
      },
    },
  },
})

export default theme
