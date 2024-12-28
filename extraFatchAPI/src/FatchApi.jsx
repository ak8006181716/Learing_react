import React, { useEffect, useState } from 'react'

const FatchApi = () => {
    const [newData, setNewData] = useState([])
    useEffect(() => {
        const fatchDataFromApi = async () => {
            const API = await fetch("https://jsonplaceholder.typicode.com/photos")
            const data = await API.json()
            setNewData(data)
            console.log(data)
        }
        fatchDataFromApi()
    }, [])

    return (
        <div>{newData.map((newdata) =>(
             <div key={newdata.id}><br />
            <h1>{newdata.title}</h1>
            <img src={newdata.url} alt="" />
            <img src={newdata.thumbnailUrl} alt="" />
        </div>))}</div>
    )
}

export default FatchApi