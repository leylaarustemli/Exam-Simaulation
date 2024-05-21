import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import MainContext from '../../../context/context'

import { Helmet } from 'react-helmet-async'
import "./Detail.css"
const Detail = () => {
    const {id}=useParams()
    const [itemData,setItemData]=useState([])

    useEffect(() => {
          axios.get(`${"http://localhost:4404/api/products/"}${id}`)
          .then((res) => {
            setItemData(res.data);
            console.log(id)
    
          })
          
      }, []);
      
    const {basket,setBasket,addToBasket,data,setData}=useContext(MainContext)
  return (
    <div className="container d-flex  mt-5 py-5 ">
    <Helmet>
      <title>
        Detail
      </title>
    </Helmet>
    <div className='details'>
    <div className="container">
      <div className="left-detail">
        <img src={data.image} alt="" />
      </div>
      <div className="right-detail">
        <h2>TITLE:{data.title}</h2>
        <h4>PRICE:{data.price}</h4>
        <p>DESCRIPTION:{data.description}</p>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Detail