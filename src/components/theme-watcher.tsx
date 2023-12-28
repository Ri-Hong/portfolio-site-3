import { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useColorMode as useThemeUIColorMode } from "theme-ui";

const ThemeWatcher = () => {
  const { colorMode, setColorMode } = useColorMode();

  const [themeUIColorMode, setThemeUIColorMode] = useThemeUIColorMode<
    "light" | "dark"
  >();

  useEffect(() => {
    if (colorMode === "dark") {
      setThemeUIColorMode("dark");
    } else {
      setThemeUIColorMode("light");
    }
  }, [colorMode, setThemeUIColorMode]);

  return null; // This component does not render anything
};

export default ThemeWatcher;
