/** @jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui"

const Footer = () => {

  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
      </Flex>
    </Box>
  )
}

export default Footer
