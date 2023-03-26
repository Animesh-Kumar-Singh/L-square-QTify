import React from "react";
import Home from "./Home/Home";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider> 
    </>
  );
}

export default App;
