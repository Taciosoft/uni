import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
