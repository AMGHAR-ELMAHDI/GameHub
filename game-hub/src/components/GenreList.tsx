import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  const { toggleColorMode } = useColorMode();

  const color = useColorModeValue("gray.900", "gray.200");

  return (
    <>
      <Heading fontSize={"3xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY={"5px"}>
            <HStack spacing={"10px"}>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={data.image_background}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
                color={color}
                onClick={() => onSelectGenre(data)}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
