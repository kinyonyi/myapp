import React from 'react'
import Header from './Header'
import Form from './Form'
import Main from './Main'
import Footer from './Footer'
import Conditional from './Conditional'
import Nav from './Nav'

const Homepage = () => {
    const handleClick = () => {
        alert("click btn 2")
      }
    return (
        <div>
            <Nav />
            <Header name="Eng Dave" greeting="Good evening!" handleClick={handleClick} />
            <Conditional />
            <Form />
            <Main />
            <Footer />
        </div>
    )
}

export default Homepage