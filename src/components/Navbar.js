import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import './navbar.css';
import { Button } from './Button';
import Popup from './Popup';


function Navbar(props) {
    const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const history= useHistory();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [openPopup, setOpenPopup] = useState(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    } ;
    
    const signOut =() =>{

        localStorage.clear();
        console.log("logged out")
        history.push("/");
    }
  
 
     const getSignInSignOut = () => {
       //localStorage.setItem("loggedInUser", "test@email.com");
       //localStorage.removeItem("loggedInUser");
        if(localStorage.getItem("loggedInUser")){
            return (
                <div>
                <li>
                <Link to="/" className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign Out
                </Link>
                </li>
        </div>
            );
            
        }
        
        return (
            <div>
            <li>
            <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
            </Link>
        </li>
        <li>
            <Link className='nav-links-mobile' onClick={() => setOpenPopup(true)} onClick={closeMobileMenu}>
                Sign In
            </Link>
        </li></div>
        );
    }

    const getSignInSignOutButton = () => {
        if(localStorage.getItem("loggedInUser")){
            return (
                <div>
               
               {button && <Link className='btn--outlines' to="/" onClick={signOut}>SIGN-OUT</Link>}

                
        </div>
            );
            
        }
        return (
            <div className="navbar--container">
            {button && <Button buttonStyle='btn--outline' >SIGN-UP</Button>}
            {button && <Link className='btn--outlines' onClick={() => setOpenPopup(true)}>SIGN-IN</Link>}
            </div>
        );
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

        return (
            
         <>
         <nav className="navbar">
        <div className="navbar--container width">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/MSTI_Logo_translucent.png" width="100"
         />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to="/" className='nav-links hvr-underline-from-center' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/products" className='nav-links hvr-underline-from-center' onClick={closeMobileMenu}>
                    Contacts
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/products" className='nav-links hvr-underline-from-center' onClick={closeMobileMenu}>
                   About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/products" className='nav-links hvr-underline-from-center' onClick={closeMobileMenu}>
                   Careers
                </Link>
            </li>
         

            {getSignInSignOut()}
            
            </ul>
           {getSignInSignOutButton()}
            </div>   
            </nav>
          <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
            
            </Popup> 
    </>
        );
}

export default Navbar;