import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/Dashboard";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Reset from "./components/auth/Reset";
import Forgot from "./components/auth/Forgot";
import Message from "./components/Message";
import Main_Logic from "./components/movie_logic/MainLogic";
import Welcome from "./components/Dashboard";
import Header from "./components/layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <Navbar />

        <Route path="/welcome" component={Welcome} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
        <Route path="/reset" component={Reset} />
        <Route path="/dahsboard" component={Dashboard} />
        <Route path="/message" component={Message} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/movie" component={Main_Logic} />
      </div>
    </BrowserRouter>
  );
}

export default App;
//footer container
