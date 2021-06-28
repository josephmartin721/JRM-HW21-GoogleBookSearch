import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import { CssBaseline } from "@material-ui/core";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import MainContainer from "./layouts/MainContainer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Nav />
        <MainContainer>
          <Route exact path="/" component={Search} />
        </MainContainer>
      </Router>
    </React.Fragment>
  );
}


export default App;