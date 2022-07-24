import { Search } from "components/Search";
import React from "react";
import { Container } from "./TopBar.styles";

const TopBar = () => (
  <Container>
    <h1>Github Lookup App.</h1>
    <Search />
  </Container>
);

export default TopBar;
