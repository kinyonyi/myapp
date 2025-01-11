import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import useApiRequest from './useApiRequest'

const Products = () => {
    const [products, setProducts] = useState([])
    const { getRequest, putRequest, deleteRequest, postRequest, loading } = useApiRequest()

    useEffect(() => {
        const fetchData = async() => {
            try {
                const data = await getRequest("https://fakestoreapi.com/products")
                setProducts(data)
                //setLoading(false)
            } catch (error) {
                console.log(`Error fetching products: ${error}`)
            }
        }

        fetchData()
        /*
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
                setProducts(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts("https://fakestoreapi.com/products")
        return () => {
            abortController.abort()
        }
        */
    }, [])

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const data = await postRequest("https://fakestoreapi.com/products", product)
            if(data){
                alert(JSON.stringify(data))
            }
            
        } catch (error) {
            console.log(`Error fetching products: ${error}`)
        }
        /*
        console.log('Product submitted:', product);
        const abortController = new AbortController()
        const url = "https://fakestoreapi.com/products"
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(product),
                signal: abortController.signal
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json()
            if(data){
                alert(JSON.stringify(data));
            }
        } catch (error) {
            console.log(error);
        }
        */
        
    };
    /*
    if (loading) {
        return <h1>Loading ...</h1>
    }
    */

    const handleDelete = async(id) => {
        try {
            const data = await deleteRequest(`https://fakestoreapi.com/products/${id}`)
            if(data){
                alert(JSON.stringify(data))
            }
            
        } catch (error) {
            console.log(`Error deleting product: ${error}`)
        }
    }

    return (
        <div>
            <Nav />
            <h1>Products</h1>
            {loading && <p>loading ...</p>}
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="url"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {products.length > 0 && products.map(product =>
                <div key={product.id}>
                    <img src={product.image} width={200} />
                    <p>rating: {product.rating.rate} Count: {product.rating.count}</p>
                    <h2>{product.title} - {product.category} - {product.price}</h2>
                    <p>{product.description}</p>
                    <Link to={`/products/${product.id}`}>product details</Link>
                    <Link onClick={()=>handleDelete(product.id)} style={{color:"red"}}>delete</Link>
                </div>
            )}
        </div>
    )
}

export default Products