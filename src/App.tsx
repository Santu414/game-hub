import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="coral" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="dodgerblue" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
