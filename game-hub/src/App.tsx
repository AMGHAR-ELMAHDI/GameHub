import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"dodgerblue"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
