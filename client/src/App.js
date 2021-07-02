import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Search from "./components/pages/Search";
import Nav from "./components/Nav/Nav";
import Container from "./layouts/MainContainer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Nav />
        <Container>
          <Route exact path="/" component={Search} />
        </Container>
      </Router>
    </React.Fragment>
  );
}


export default App;