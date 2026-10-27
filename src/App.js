//import logo from './logo.svg';                          react logo 
import './App.css';


import React, { Component } from 'react'       //to create a class based components to use short form : rcc and then enter
import Navbar from './Components/Navbar';
import News from './Components/News.js';
import NewsItem from './Components/NewsItem.js';

export default class App extends Component {
  render() {                                  // first jsx convert into html and render() fun render the html means display the html file
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}

