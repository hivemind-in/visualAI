import React, { useState } from 'react';
import './App.css';
//import { BrowserRouter, Route } from "react-router-dom";
//import LoginPage from './pages/LoginPage'
//import Main from './pages/Main'
import { Provider } from "react-redux";
import store from "./redux/store";
import ModelMenu from './components/ModelMenu';
import ModelBuilder from './components/ModelBuilder';
import Footer from './components/Footer'
function App() {
  return (
    <Provider store={store}>
      <div className={"app-main"}>
        <ModelMenu />
        <ModelBuilder />
        <Footer />
      </div>
    </Provider>
  )
}

export default App;
