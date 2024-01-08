import logo from './logo.svg';
import './App.css';
import './style.css';
import React from 'react';
import {Content,Header,Footer } from './func-components.js';
import Calendar from './class-components.js';

function App() {
    return (
        <>
        <Header/>
        <p><center><Calendar/></center></p>
        <Content/>
        <Footer/>
        </>
      )
}   

export default App;