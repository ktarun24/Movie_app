import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1> 🎬 Entertainment Hub 🎥</h1>
    </MainContainer>
  );
};

export default Header;

//main container
const MainContainer = styled.header`
  background-repeat: no-repeat;
  background-position: center;
  height: 5rem;
  background-color: #39445a;

  h1 {
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 900;
    position: absolute;
    top: 6%;
    left: 50%;
  }
`;
