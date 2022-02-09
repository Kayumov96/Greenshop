import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/index.jsx';
import Header from './components/Header/index.jsx';
import Body from './components/Body';
import Card from './components/Card';


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Body/>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

