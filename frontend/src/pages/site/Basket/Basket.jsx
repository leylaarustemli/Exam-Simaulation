import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import MainContext from "../../../context/context";
import "./Basket.css"

const Basket = () => {
const {basket,addToBasket,data}=useContext(MainContext)
   
  return (
    <div className="container my-5 ">
    <Helmet>
      <title>
        Basket
      </title>
    </Helmet>
  

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
      <th scope="col">Add</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {data.map((item,index)=>{
     <tr>
     <th scope="row">1</th>
     <td>{item.title}</td>
     <td><img src={item.image} alt="" /></td>
     <td>{item.totalPrice}</td>
     <td>{item.count}</td>
     <td> <button onClick={()=>{
      addToBasket(item._id)
     }} className='btn btn-primary'>Add</button></td>
     <td><button className='btn btn-danger'>Delete</button></td>
   </tr>
   })}
   
  </tbody>
</table>
  </div>
  )
}

export default Basket