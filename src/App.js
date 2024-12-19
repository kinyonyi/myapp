import "./App.css"
import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Form from "./components/Form";


function App() {
  const handleClick = () => {
    alert("click btn 2")
  }
  return (
    <div>
      <Header name = "Eng Dave" greeting = "Good evening!" handleClick = {handleClick} />
      <Form />
      <Main />
      <Footer />
    </div>
  );
}

/*
create a simplr user profile page using react, style it appropriately
apply any event listeners, e.g. onclick, on double click, etc
render some images as well!
*/
export default App;