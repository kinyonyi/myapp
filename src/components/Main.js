import React, { useState } from 'react'

const Main = () => {
    const data = [
        {
            id: 1,
            name: "A vehicle",
            description: "this is a desciption about this vehicle"
        },
        {
            id: 2,
            name: "A Train",
            description: "this is a desciption about this vehicle"
        },
        {
            id: 3,
            name: "A Boat",
            description: "this is a desciption about this vehicle"
        }
    ]

    const [items, setItems] = useState(data)
    const handleDelete = (id) => {
        const filtered = items.filter(item => item.id !== id);
        setItems(filtered)
    }

    /*
        Create registration form that captures the following data
        1. name
        2. gender
        3. email 
        have buttons that display registered users, delete a given user
        search for a user from the registeed users
        //u can explore local storage of the browser!
    */

    return (
        <div>
            <h2>My Items</h2>
            {items.map(item => 
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Main