import React from 'react'
import "./App.css"
import {Link, Route } from "wouter";
import Home from './pages/Home/Home.js';
import SearchResults from './pages/SearchResults/SearchResults.js';
import Detail from './pages/Detail/Detail.js';


const App = () => {
  return (
    <div className="App">
    <h1>Que stickers desea</h1>
      <section className="App-content">
      <Link to='/'>
        Home
      </Link>
      <Route
        component={Home}
        path="/"
      />
      <Route
        component={SearchResults}
        path="/search/:keyword"
      />
      <Route
        component={Detail}
        path="/search/:id"
      />
      </section>
    </div>
    
  )
}

export default App
