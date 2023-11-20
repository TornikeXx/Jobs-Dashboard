import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/FilterSection/Filter";
import Description from "./components/DescriptionSection/Description";
import MainContext from "./components/MainContext/MainContext";

const App = () => {
  return (
    <>
      <Navbar />
      <Home>
        <Filter />
        <MainContext />
        <Description />
      </Home>
    </>
  );
};
const Home = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export default App;
