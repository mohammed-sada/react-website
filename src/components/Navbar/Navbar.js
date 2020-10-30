import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => { setClick(!click) }
    const closeMobileMenu = () => { setClick(!click) }

    const showButton = () => {
        if (window.innerWidth <= 960)
            setButton(false)
        else setButton(true)
    }

    window.addEventListener('resize', showButton)

    useEffect(() => {
        showButton();
    })
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        SADA <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
                        <li className="nav-item">
                            <Link className='nav-links' onClick={closeMobileMenu} to='/'>
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-links' onClick={closeMobileMenu} to='/about'>
                                About
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-links' onClick={closeMobileMenu} to='/projects'>
                                Projects
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-links' onClick={closeMobileMenu} to='/contact'>
                                Contact
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-links-mobile' onClick={closeMobileMenu} to='/sign-up'>
                                Sign-up
                        </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
