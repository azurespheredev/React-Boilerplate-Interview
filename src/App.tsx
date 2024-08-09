import { Container, StyledEngineProvider } from "@mui/material";
import Part1Component from "./components/Part1Component";
import Part2Component from "./components/Part2Component";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container className="flex flex-col gap-12 my-8">
        <Part1Component />
        <Part2Component />
      </Container>
    </StyledEngineProvider>
  )
}