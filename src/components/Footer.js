import React from 'react'
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';
 

function Footer() {
    

    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the weekly newsletter to recieve up to date information on all things related to MSTI.
                </p>
                <p className="footer-subscription-text">
                    You can Unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline' type="submit">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>

                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{pathname: "https://www.instagram.com/"}} target='_blank'>Instagram</Link>
            <Link to={{pathname: "https://www.facebook.com/"}} target='_blank'>Facebook</Link>
            <Link to={{pathname: "https://www.youtube.com/"}} target='_blank'>Youtube</Link>
            <Link to={{pathname: "https://www.twitter.com/"}}target='_blank'>Twitter</Link>
            <Link to={{pathname: "https://www.linkedin.com/"}} target='_blank'>LinkedIn</Link>
          </div>
                    </div>
                    </div>
                    <section className="social-media">
                       <div className="social-media-wrap">
                           <div className="footer-logo">
                               <a href="#" className="social-logo">
                               <img src="images/MSTI_Logo_translucent.png" width="80"
         />
                               </a>
                           </div>
                           <small className="website-rights">MSTI 2022</small>
                           <div className ="social-icons">
                               <Link className="social-icon-link facebook"
                                   to= {{pathname: "https://www.facebook.com/"}}
                                   target='_blank'
                                   aria-label='Facebook'>
                                   <i className="fab fa-facebook-f"></i>
                                   </Link>  
                                   <Link className="social-icon-link instagram"
                                   to={{pathname: "https://www.instagram.com/"}}
                                   target='_blank'
                                   aria-label='Instagram'>
                                   <i className="fab fa-instagram"></i>
                                   </Link>
                                   <Link className="social-icon-link youtube"
                                   to={{pathname: "https://www.youtube.com/"}}
                                   target='_blank'
                                   aria-label='Youtube'>
                                   <i className="fab fa-youtube"></i>
                                   </Link>
                                   <Link className="social-icon-link twitter"
                                   to={{pathname: "https://www.twitter.com/"}}
                                   target='_blank'
                                   aria-label='Twitter'>
                                   <i className="fab fa-twitter"></i>
                                   </Link>
                                   <Link className="social-icon-link linkedin"
                                   to={{pathname: "https://www.linkedin.com/"}}
                                   target='_blank'
                                   aria-label='LinkedIn'>
                                   <i className="fab fa-linkedin"></i>
                                   </Link>                           
                               </div>
                       </div>
                    </section>
        </div>
    )
}

export default Footer;
