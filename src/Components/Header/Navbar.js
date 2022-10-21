import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/roche-robots-logo-v4-transformed.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-light p-0 ">

            <div className="container-fluid ">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-menu " id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center ">
                        <li className="nav-item" style={{ "--i": ' #c54040', "--j": 'rgb(40, 100, 197)' }}>
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title"> <Link   className="nav-link " aria-current="page" to="/">Home</Link></span>
                        </li>
                        <li className="nav-item" style={{ "--i": '#de6262', "--j": '#4fced5' }}>
                            <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                            <span className="title"><Link className="nav-link " aria-current="page" to="/about">About</Link></span>
                        </li>
                        <li className="nav-item pd categories" style={{ "--i": ' rgb(49, 224, 151)', "--j": 'rgb(18, 83, 149)' }} >
                            <span className="icon"><ion-icon name="bag-handle-outline"></ion-icon></span>
                            <span className="title  "><a className="nav-link " aria-current="page" href="/products.html">Product</a></span>
                        </li>
                        <li className="nav-item" style={{ "--i": '#355bd5 ', "--j": '#cb90cd' }}>
                            <span className="icon"><ion-icon name="construct-outline"></ion-icon></span>
                            <span className="title"><Link className="nav-link " aria-current="page" to="/services">Services</Link></span>
                        </li>
                        <li className="nav-item" style={{ "--i": ' #17b1bc', "--j": '#0c3d83' }}>
                            <span className="icon"><ion-icon name="accessibility-outline"></ion-icon></span>
                            <span className="title"><Link className="nav-link " aria-current="page" to="/demonstration">Demonstration</Link></span>
                        </li>
                        <li className="nav-item" style={{ "--i": '#ed4264', "--j": '#e1cb90' }}>
                            <span className="icon"><i className="fa-solid fa-virus-covid"></i></span>
                            <span className="title"><a className="nav-link " aria-current="page" href="/products.html?id=8">Covid-19 Robots</a></span>
                        </li>
                        <li className="nav-item" style={{ "--i": ' rgb(237, 75, 189)', "--j": 'rgb(54, 131, 209)' }}>
                            <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                            <span className="title"><Link className="nav-link " aria-current="page" to="/contact">Contact</Link></span>
                        </li>

                        <div className="d-flex align-items-center">
                            <button className="search-toggle">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <a href="/" className="shoping-bag">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                        </div>
                    </ul >
                    <form className="search-form">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="container categories" style={{ "display": 'none' }}></div>
        </nav>
    );
};

export default Navbar;