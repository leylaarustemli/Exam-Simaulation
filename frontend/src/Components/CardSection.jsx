import React from 'react'
import { useContext } from 'react'
import MainContext from '../context/context'
import "./CardSection.css"
const CardSection = () => {
    const{data,addToBasket}=useContext(MainContext)
  return (
    <div className='cardsection'>
        <div className="container">
            <h3>Popular Courses</h3>
            <div className="cards">
                {data.map((item,index)=>(
                    <div className="card">
                    <div className="head-card">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="body-card">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                    </div>
                    <div className="card-footer">
                        <img src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="" />
                        <span>Michael Smith, Author</span>
                        <span className='dollar'> ${item.totalPrice}</span>
                    </div>
                    <div className="card-buttons">
                        <button onClick={()=>{
                            addToBasket(item._id)
                        }} id='basket'>Basket</button>
                        <button id='detail'>Detail</button>
                    </div>
                </div>
                ))}
                
                
                </div>

                </div>

                </div>

  )
}

export default CardSection