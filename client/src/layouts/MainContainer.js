import React from "react";
import { Container } from "@material-ui/core";

function MainContainer({children}) {
  return (
    <div>
      <Container maxWidth="lg">
        {children}
      </Container>
    </div>
  );
}


export default MainContainer;