import React from 'react'
import "./Footer.css"
const Footer = () => {
return (
    <div className='footer'>
<div className="container">
    <div className="footer1">
        <h3>Subscribe to newsletter</h3>
        <div className="inp-btn">
        <input type="text" placeholder='Email Address' /> <button>Subscribe</button>
        </div>
       
    </div>
    <hr />
    <div className="footer2">
        <div className="foot2-1">
            <div className="imgs">
            <img src="	https://preview.colorlib.com/theme/course/images/logo.png"
             alt="" />
             <h3>COURSE</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, id illum? Eligendi ut beatae, aliquam dolore sint, accusantium quod vel omnis rerum autem itaque minima.</p>
           

        </div>
        <div className="menu">
            <h3>Menu</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>News</p>
            <p>Contact</p>
        </div>
        <div className="menu">
            <h3>Menu</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>News</p>
            <p>Contact</p>
        </div>
        <div className="menu">
            <h3>Menu</h3>
            <p><i class="fa-solid fa-location-dot"></i>Home</p>
            <p><i class="fa-regular fa-note-sticky"></i>About Us</p>
            <p><i class="fa-regular fa-envelope"></i>Courses</p>
            <p>News</p>
            <p>Contact</p>
        </div>
    </div>
    <hr />
    <div className="footer3">
        <div className="left-ftr3">
            <span>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</span>
        </div>
        <div className="right-ftr3">
        <i class="fa-brands fa-pinterest-p"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
    </div>

</div>
    </div>
)
}

export default Footer
                    