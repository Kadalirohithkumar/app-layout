import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Header extends Component{

    state={clicked:false}

    handleClick = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
      };
      

render(){
    const{clicked}=this.state

    return (
        <nav className="header-con">
        <div className="logo-con">
        <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            className="logo"
            alt="wave"
        />
        <h1 className="title">Wave</h1>
        </div>
        <div className='link-container'>
            <ul className={clicked?'nav-items open':'nav-items '}>
            <li className="link-item">
                <Link className="route-link" to="/">
                Home
                </Link>
            </li>
            <li className="link-item">
                <Link className="route-link" to="/about">
                About
                </Link>
            </li>
            <li className="link-item">
                <Link className="route-link" to="/contact">
                Contact
                </Link>
            </li>
            </ul>
            <div id='menu' className='menu' onClick={this.handleClick}>
                <i className={clicked? 'fas fa-times':'fas fa-bars'}></i>
            </div>
        </div>

    </nav>
    )
}
}

export default Header