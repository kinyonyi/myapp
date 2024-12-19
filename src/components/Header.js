import React from 'react'
import myImage from "../images/bk.jpeg"

const Header = (props) => {
    const handleButton = () => {
        alert("I have been pressed!")
    }

    const {name, greeting, handleClick} = props
    return (
        <div>
            <h1>Calculator for {name}</h1>
            <p>Greeting {greeting}</p>
            <p>{Math.random() * 10}</p>
            <button onClick={handleButton}>click me</button>
            <button onClick={handleClick}>click btn 2</button>
            <img src="images/cover_v3.jpeg" width={200} alt ="img"/>
            <img src={myImage} width={200} />
        </div>
    )
}

export default Header