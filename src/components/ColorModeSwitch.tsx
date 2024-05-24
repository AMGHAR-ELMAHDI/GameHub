import {
  Box,
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiEvilMoon } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorMode === "dark");

  return (
    <Box
      cursor={"pointer"}
      onClick={() => {
        setIsDarkMode(!isDarkMode);
        toggleColorMode();
      }}
    >
      {colorMode === "dark" && <GiEvilMoon fontSize={"30px"} />}
      {colorMode != "dark" && <MdOutlineWbSunny fontSize={"30px"} />}
    </Box>
  );
}

export default ColorModeSwitch;
