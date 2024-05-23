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

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorMode === "dark");

  return (
    <HStack>
      <GiEvilMoon
        cursor={"pointer"}
        fontSize={"30px"}
        onClick={() => {
          setIsDarkMode(!isDarkMode);
          toggleColorMode();
        }}
      />
    </HStack>
  );
}

export default ColorModeSwitch;
