import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {
      username,
      password,
      email,
    };
    setUsername("");
    setPassword("");
    setEmail("");
    axios
      .post("http://localhost:8080/user/signup", users)
      .then((res) => {
        setMessage(res.data);
        history.push("/Signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginContainer>
      <div className="container">
        <h1>Signup</h1>
        <span className="message">{message}</span>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Passsword"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
        <br />
        <Link to="/Signin">
          <h5>Already have an account?</h5>
        </Link>
      </div>
    </LoginContainer>
  );
};

export default Signin;
//main container

const LoginContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;
  h1 {
    font-weight: 900;
    color: var(--dark-blue);
  }
  .btn-primary {
    margin-top: 2rem;
    background: var(--blue);
    border: none;
  }
  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;
