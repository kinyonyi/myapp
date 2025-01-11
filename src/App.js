import "./App.css"
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Details from "./components/Details";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Homepage />}/>
        <Route path="/products" element = {<Products />}/>
        <Route path="/products/:id" element = {<Details />}/>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
    </div>
  );
}

/*
create a simplr user profile page using react, style it appropriately
apply any event listeners, e.g. onclick, on double click, etc
render some images as well!
*/
export default App;