import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
           
                <div className="left-header">
                    <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                    <h4> COURSE</h4>
                </div>
                <div className="center-header">
                    <ul>
                        <li> <Link to="/">HOME</Link> </li>
                        <li> ABOUT US</li>
                        <li>COURSES</li>
                        <li> ELEMENTS</li>
                        <li> NEWS</li>
                        <li>CONTACT</li>
                   <li>     <Link to="/basket">Basket</Link></li>
                 </ul>
                </div>
                <div className="right-header">
                <i class="fa-solid fa-phone-volume"></i>
                <h5>+43 4566 7788 2457</h5>
                </div>
            </div>
    
    )
}

export default Header