import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abortController = new AbortController()

        const fetchProducts = async (url) => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    signal: abortController.signal
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json()
                setProduct(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts(`https://fakestoreapi.com/products/${id}`)
        return () => {
            abortController.abort()
        }

    }, [id])

    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h1>Details {id}</h1>
            {product &&
                <div>
                    <img src={product.image} width={200} />
                    <p>rating: {product.rating.rate} Count: {product.rating.count}</p>
                    <h2>{product.title} - {product.category} - {product.price}</h2>
                    <p>{product.description}</p>
                </div>
            }
        </div>
    )
}

export default Details