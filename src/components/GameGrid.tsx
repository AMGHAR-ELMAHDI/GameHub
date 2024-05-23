import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const { genre, setGenre } = useContext(GeneralContext);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  // if (!data || !data.length) {
    // return (
    //   <Box
    //     padding={2}
    //     display={"flex"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //     height={"100%"}
    //   >
    //     <Button
    //       padding={"40px"}
    //       fontSize={"2xl"}
    //       onClick={() => (document.location.href = "/")}
    //     >
    //       Go Back Home
    //     </Button>
    //   </Box>
    // );
  // }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={6}
      padding={"10px"}
    >
      {isLoading &&
        Skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
