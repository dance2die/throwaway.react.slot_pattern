import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const BaseContainer = styled.div`
  color: white;
`;

const LeftContainer = BaseContainer.extend`
  background-color: gold;
  color: black;
`;
const CenterContainer = BaseContainer.extend`
  background-color: blue;
`;
const TopContainer = BaseContainer.extend`
  background-color: red;
`;

const Layout = ({ left, center, top }) => (
  <div>
    <LeftContainer>{left}</LeftContainer>
    <CenterContainer>{center}</CenterContainer>
    <TopContainer>{top}</TopContainer>
  </div>
);

const Left = () => <div>Left!</div>;
const Center = () => <div>Center!</div>;
const Top = () => <div>Top!</div>;

function App() {
  return (
    <div className="App">
      <Layout left={<Left />} center={<Center />} top={<Top />} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
