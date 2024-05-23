import {
  HStack,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Show,
} from "@chakra-ui/react";

import logo from "../assets/logo.webp";
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
    <HStack padding={"10px"}>
      <Show below="lg">
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent padding={"20px"} width={"fit-content"} onClick={onClose} >
            <GenreList
              selectedGenre={genre}
              onSelectGenre={(genre) => setGenre(genre)}
            />
          </DrawerContent>
        </Drawer>
      </Show>
      <Image cursor="pointer" src={logo} boxSize="60px" onClick={onOpen} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
