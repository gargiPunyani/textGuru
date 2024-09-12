import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Css/Navbar.css"

const Navbar = () => {
  const [show, setShow]=useState(false)

  const showSidebar = () => {
      setShow(!show)
  }
  const hideSidebar = () => {
  setShow(!show)

  }
  return (
    <div className=''>
        <div className='navb-head'>
            <div className='navhead'>
                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811933/logo_advukb.png' alt='' />
                <nav className='navContent'>
                <ul>
                    <li className='hideOnMobile'><Link className="Link" to= "/">Home</Link></li>
                    <li className='hideOnMobile'><Link className='Link' to="/about">About</Link></li>
                    <li className='hideOnMobile'><Link className='Link' to="/blogs">Blogs</Link></li>
                    <li className='hideOnMobile'><Link className='Link' to="/pricing">Pricing</Link></li>
                    <li className='hideOnMobile'><Link className='Link' to="/product">Products</Link></li>
                    <li className='hideOnMobile'><Link className='Link' to="/login">Login</Link></li>
                    <li className='hideOnMobile'><Link className='Link' to="/contact">Contact Us</Link></li>
                    <li className='hideOnMobile'>Call: 8284047608</li>
                    </ul>
                    <label className='menu' onClick={showSidebar}>
                           
                           { !show && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>}
                           </label>
            </nav>

            <nav className='sidenavbar' style={{display: `${show ? 'block': 'none'}`}}>
                        <ul className='sidebar' >
                            <li className='imageLink' onClick={hideSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368" style={{marginTop:"2rem", marginLeft:"10em"}} ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </li>
              
                    <li className='navbarComponents'><Link className="Link" to= "/">Home</Link></li>
                    <li className='navbarComponents'><Link className='Link' to="/about">About</Link></li>
                    <li className='navbarComponents'><Link className='Link' to="/blogs">Blogs</Link></li>
                    <li className='navbarComponents'><Link className='Link' to="/pricing">Pricing</Link></li>
                    <li className='navbarComponents'><Link className='Link' to="/product">Products</Link></li>
                    <li className='navbarComponents'><Link className='Link' to="/login">Login</Link></li>
                    <li className='navbarComponents'><Link className='Link' to="/contact">Contact Us</Link></li>
                   
                    </ul>
            </nav>

            </div>
        </div>

    </div>
  )
}

export default Navbar