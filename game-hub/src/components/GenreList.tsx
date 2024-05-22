import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
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

  return (
    <>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY={"5px"}>
            <HStack spacing={"10px"}>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={data.image_background}
              />
              <Button
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
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
