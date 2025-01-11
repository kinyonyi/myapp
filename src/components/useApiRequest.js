import React, {useState} from 'react'

const useApiRequest = () => {
    const [loading, setLoading] = useState(false)
    const sendRequest = async(url, method, data=null) => {
        const abortController = new AbortController()
        setLoading(true)
        try {
            const headers = {}

            const token = localStorage.getItem("authToken")
            if(token){
                headers.Authorization = `Token ${token}`
            }

            const requestOptions = {
                signal: abortController.signal,
                headers: headers,
                method: method,
                cors: "no-cors",
                body: data !== null ? data : null
            }

            const apiRequest = await fetch(url, requestOptions)

            if (!apiRequest.ok) {
                throw new Error(`Response status: ${apiRequest.status}`);
            }

            const responseData = await apiRequest.json()
            setLoading(false)
            return responseData
        } catch (error) {
            return error
        }
    }

    const postRequest = async(url, data) => {
        return await sendRequest(url, "POST", data)
    }

    const putRequest = async(url, data) => {
        return await sendRequest(url, "PUT", data)
    }

    const getRequest = async(url) => {
        return await sendRequest(url, "GET")
    }

    const deleteRequest = async(url) => {
        return await sendRequest(url, "DELETE")
    }

    return { postRequest, putRequest, getRequest, deleteRequest, loading}
};

export default useApiRequest