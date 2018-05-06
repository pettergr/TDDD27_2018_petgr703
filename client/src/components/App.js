import React from 'react'
import AppHeader from './AppHeader'
import Main from './Main'

const App = () => (
  <div>
    <AppHeader />
    <Main />
  </div>
)

export default App


/*
import React, { Component } from "react";
import logo from "../img/logo.svg";
import "../css/App.css";
import CustomerList from "./CustomerList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <CustomerList />;
    }
}

export default App;
*/
