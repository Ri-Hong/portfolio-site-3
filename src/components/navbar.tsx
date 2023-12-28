/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Box, Flex, Link, Button, useColorMode } from 'theme-ui';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeChange = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
  };

  return (
    <Box as="nav" variant="layout.nav">
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Logo and Site Name */}
        <Flex sx={{ alignItems: 'center' }}>
          {/* Add your logo here */}
          <span>SiteName</span>
        </Flex>

        {/* Hamburger Menu for Mobile */}
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)} sx={{ display: ['block', 'none'] }}>
          Menu
        </Button>

        {/* Navigation Links */}
        <Box as="ul" sx={{ display: isMenuOpen ? ['block', 'none'] : ['none', 'flex'] }}>
          <li><RouterLink to="/blog" sx={{ variant: 'links.nav' }}>Blog</RouterLink></li>
          <li><Link href="#" sx={{ variant: 'links.nav' }}>GitHub</Link></li>
          <li><Button onClick={handleThemeChange}>Theme</Button></li>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
