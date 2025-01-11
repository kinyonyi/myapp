import React, { act, useState } from 'react'

const Login = () =>{
    return(
        <div>
            <h1>Login Form</h1>
        </div>
    )
}
const Register = () =>{
    return(
        <div>
            <h1>Register Form</h1>
        </div>
    )
}

const Conditional = () => {
    const [action, setAction] = useState(null)
    const handleAction = (page) => {
        setAction(page)
    }
    return (
        <div>
            <button onClick={()=>handleAction('login')}>login</button>
            <button onClick={()=>handleAction('register')}>register</button>
            <p>Welcome to our application, select either register or login to proceed!</p>
            {action !== null && (action === 'login' ? <Login /> : <Register />)}
        </div>
    )
}

export default Conditional