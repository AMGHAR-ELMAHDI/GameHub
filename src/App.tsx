import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import "./App.css";
import GameHeading from "./components/GameHeading";
import { GeneralContext } from "./context/GeneralContext";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function getClearSortName(sortOrder: string) {
  if (sortOrder == null) return "";
  if (sortOrder[0] === "-") return sortOrder.slice(1);
  return sortOrder;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <GeneralContext.Provider
        value={{
          genre: gameQuery.genre,
          setGenre: (genre: Genre | null) =>
            setGameQuery({ ...gameQuery, genre }),
        }}
      >
        <Grid
          marginX={2}
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "250px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </GridItem>

          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </GridItem>
          </Show>

          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading gameQuery={gameQuery} />
              <HStack spacing={5} marginBottom={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  setSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
                <SortSelector
                  sortOrder={
                    getClearSortName(gameQuery.sortOrder) || "Relevance"
                  }
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </HStack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </GeneralContext.Provider>
    </>
  );
}

export default App;
