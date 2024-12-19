import React, { useState, useRef, useEffect } from 'react'

const Form = () => {
    const [name, setName] = useState('Engineer David!')
    const [time, setTime] = useState(0)
    const count = useRef(0)
    const nameInput = useRef()

    const handleForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData)
        console.log(formData.get('name'))
        setName(formData.get('name'))
        e.target.reset()
    }

    const handleIncrement = () => {
        count.current = count.current + 1
        console.log(count.current)
    }

    const handleFocus = () => {
        //console.log(nameInput.current.value)
        nameInput.current.focus()
    }

    useEffect(()=>{
        console.log("I have loaded!")

        //cleanup function!
        return () => console.log("I have unmounted!")
    }, [name])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(prevTime => prevTime + 1)
        }, 1000)

        return () => clearInterval(interval)
    },[])
    
    return (
        <form onSubmit={handleForm}>
            <h2>Time: {time}</h2>
            <h3>Count: {count.current}</h3>
            <label for="name">Name: {name}</label>
            <input type='text' ref={nameInput} id='name' name='name' placeholder='Enter your name here!' />
            <button type='submit'>Save Information!</button>
            <button type='button' onClick={handleIncrement}>increment</button>
            <button type='button' onClick={handleFocus}>focus element</button>
        </form>
    )
}

export default Form