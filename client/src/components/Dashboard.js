import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <AddArticleContainer>
      <div className="container">
        <h1> Hello </h1>
      </div>
      <div className="container">
        <p>
          <Link to="/Signin">Signin</Link>/<Link to="/Signup">Signup</Link> to
          create your favourite movie playlist!
        </p>
      </div>
    </AddArticleContainer>
  );
};

export default Dashboard;
const AddArticleContainer = styled.div`
  backgroundRepeat: 'no-repeat',
  width:'250px';
  margin: 4rem auto;
  padding: 4rem;
  width: 31.25rem;
  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }
  p {
    font-weight: 700;
  }
`;
