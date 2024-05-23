import {
  HStack,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Show,
  Box,
} from "@chakra-ui/react";
import { PiGameControllerFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useContext, useRef } from "react";
import GenreList from "./GenreList";
import { GeneralContext } from "../context/GeneralContext";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { genre, setGenre } = useContext(GeneralContext);

  const btnRef = useRef<any>();

  return (
    <HStack padding={"10px"} spacing={5} paddingX={5}>
      <Show below="lg">
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            padding={"20px"}
            width={"fit-content"}
            onClick={onClose}
          >
            <GenreList
              selectedGenre={genre}
              onSelectGenre={(genre) => setGenre(genre)}
            />
          </DrawerContent>
        </Drawer>
      </Show>
      <HStack>
        <Show below="lg">
          <IoMenu fontSize={"30px"} onClick={onOpen} />
        </Show>

        <Box onClick={() => (document.location.href = "/")}>
          <PiGameControllerFill cursor="pointer" fontSize="40px" />
        </Box>
      </HStack>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
