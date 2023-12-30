/** @jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui";
import { SiGithub, SiDevpost, SiLinkedin, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <Box as="footer" variant="footer" sx={{ zIndex:100,
  }}>
      {/* Copyright &copy; {new Date().getFullYear()}. All rights reserved. */}
      <br />
      <Flex
        sx={{
          alignItems: `center`,
          mb: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
          display: `flex`,
          justifyContent: `space-between`,
          width: `100vw`,
        }}
      >
        <div
          sx={{
            textAlign: `left`,
            marginLeft: 4,
            height: `auto`,
          }}
        >
          <h1>Ri Hong</h1>
          <p sx={{}}>riri.hong@gmail.com</p>
        </div>
        <div
          sx={{
            marginRight: 4, // Add space between icons

            "a > svg": {
              fontSize: 5,
              marginRight: 4, // Add space between icons
              "&:hover": {
                color: "primary",
                cursor: "pointer",
                duration: "0.3s",
              },
            },
          }}
        >
          <a
            href="https://github.com/Ri-Hong"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ririhong/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://devpost.com/riri-hong"
            target="_blank"
            rel="noreferrer"
          >
            <SiDevpost />
          </a>
          <a
            href="https://leetcode.com/Ri_Hong/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
