import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../App.css';
import '../BuildGuide.css';
import '../navbar.css';


class BuildGuide extends Component {
    
    render() {
        
        return (
            
            <div>
            <nav class="menu">
            <a className="hvr-underline-from-center" href="#Example1">Linus Tech Tips</a>
            <a className="hvr-underline-from-center" href="#Example2">Jays Two Cents</a>
            <a className="hvr-underline-from-center" href="#Example3">Bitwit</a>
            <a className="hvr-underline-from-center" href="#Example4">Paul's Hardware</a>
            <a className="hvr-underline-from-center" href="#Example5">Kingston Tech.</a>    
            </nav>  

            <div class="content">
               <section id="Example1" className="section">
                   <div className="pic"><img src='images/ltt.png' className="picture-size"/></div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="youtube.com/watch?v=v7MYOpFONCU"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://youtu.be/Lfcschg9uwU"/></div>
               </div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=emlRd643NVI"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=ZDLbakOm3mM"/></div>
               </div>
               <div className ="social-icons bottom">
                               <Link className="social-icon-link facebook"
                                   to= {{pathname: "https://www.facebook.com/LinusTech"}}
                                   target='_blank'
                                   aria-label='Facebook'>
                                   <i className="fab fa-facebook-f"></i>
                                   </Link>  
                                   <Link className="social-icon-link instagram"
                                   to={{pathname: "https://www.instagram.com/linustech"}}
                                   target='_blank'
                                   aria-label='Instagram'>
                                   <i className="fab fa-instagram"></i>
                                   </Link>
                                   <Link className="social-icon-link youtube"
                                   to={{pathname: "https://www.youtube.com/user/LinusTechTips"}}
                                   target='_blank'
                                   aria-label='Youtube'>
                                   <i className="fab fa-youtube"></i>
                                   </Link>
                                   <Link className="social-icon-link twitter"
                                   to={{pathname: "https://www.twitter.com/LinusTech"}}
                                   target='_blank'
                                   aria-label='Twitter'>
                                   <i className="fab fa-twitter"></i>
                                   </Link>                         
                               </div>
               </section>
               <section id="Example2" class="section">
               <div className="pic"><img src='images/jtc.png' className="picture-size2"/></div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=DHC05EzwNoA"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=1hKW2EjMT04"/></div>
               </div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=ShfkMFBNgcQ"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=DKSxHovhRSI"/></div>
               </div>
               <div className ="social-icons bottom2">
                               <Link className="social-icon-link facebook"
                                   to= {{pathname: "https://www.facebook.com/Jayztwocents"}}
                                   target='_blank'
                                   aria-label='Facebook'>
                                   <i className="fab fa-facebook-f"></i>
                                   </Link>  
                                   <Link className="social-icon-link instagram"
                                   to={{pathname: "https://www.instagram.com/jayztwocents"}}
                                   target='_blank'
                                   aria-label='Instagram'>
                                   <i className="fab fa-instagram"></i>
                                   </Link>
                                   <Link className="social-icon-link youtube"
                                   to={{pathname: "https://www.youtube.com/user/Jayztwocents"}}
                                   target='_blank'
                                   aria-label='Youtube'>
                                   <i className="fab fa-youtube"></i>
                                   </Link>
                                   <Link className="social-icon-link twitter"
                                   to={{pathname: "https://www.twitter.com/JayzTwoCents"}}
                                   target='_blank'
                                   aria-label='Twitter'>
                                   <i className="fab fa-twitter"></i>
                                   </Link>                         
                               </div>
               </section>
               <section id="Example3" class="section">
               <div className="pic"><img src='images/bitwit.png' className="picture-size3"/></div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=2vb9IAQ6bNo"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=nqRHFXJMZ7c"/></div>
               </div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=3yKfGzY_tRw"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=2tYim2XRT-M"/></div>
               </div>
               <div className ="social-icons bottom3">
                               <Link className="social-icon-link facebook"
                                   to= {{pathname: "https://www.facebook.com/bitwitkyle"}}
                                   target='_blank'
                                   aria-label='Facebook'>
                                   <i className="fab fa-facebook-f"></i>
                                   </Link>  
                                   <Link className="social-icon-link instagram"
                                   to={{pathname: "https://www.instagram.com/bitwitkyle"}}
                                   target='_blank'
                                   aria-label='Instagram'>
                                   <i className="fab fa-instagram"></i>
                                   </Link>
                                   <Link className="social-icon-link youtube"
                                   to={{pathname: "https://www.youtube.com/user/AwesomeSauceNews"}}
                                   target='_blank'
                                   aria-label='Youtube'>
                                   <i className="fab fa-youtube"></i>
                                   </Link>
                                   <Link className="social-icon-link twitter"
                                   to={{pathname: "https://www.twitter.com/bitwitkyle"}}
                                   target='_blank'
                                   aria-label='Twitter'>
                                   <i className="fab fa-twitter"></i>
                                   </Link>                         
                               </div>
               </section>
               <section id="Example4" class="section">
               <div className="pic"><img src='images/pauls.png' className="picture-size4"/></div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=CAuGEtVq-f0"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=PubJxQBKBio"/></div>
               </div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=I3JG6VdOY7Y"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=LbpqkiaO7q4"/></div>
               </div>
               <div className ="social-icons bottom4">
                               <Link className="social-icon-link facebook"
                                   to= {{pathname: "https://www.facebook.com/profile.php?id=100044545505229"}}
                                   target='_blank'
                                   aria-label='Facebook'>
                                   <i className="fab fa-facebook-f"></i>
                                   </Link>  
                                   <Link className="social-icon-link instagram"
                                   to={{pathname: "https://www.instagram.com/paulhardware"}}
                                   target='_blank'
                                   aria-label='Instagram'>
                                   <i className="fab fa-instagram"></i>
                                   </Link>
                                   <Link className="social-icon-link youtube"
                                   to={{pathname: "https://www.youtube.com/user/paulshardware"}}
                                   target='_blank'
                                   aria-label='Youtube'>
                                   <i className="fab fa-youtube"></i>
                                   </Link>
                                   <Link className="social-icon-link twitter"
                                   to={{pathname: "https://twitter.com/paulhardware"}}
                                   target='_blank'
                                   aria-label='Twitter'>
                                   <i className="fab fa-twitter"></i>
                                   </Link>                         
                               </div>
                   </section>
               <section id="Example5" class="section">
               <div className="pic"><img src='images/kingston.png' className="picture-size5"/></div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://youtu.be/pQfTftCrPx4"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=yKHI4eeVgFE"/></div>
               </div>
               <div className="float">
               <div className="video"><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=Ir8pvg660H0"/></div>
               <div><ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=fTMCNIwHRSA"/></div>
               </div>
               <div className ="social-icons bottom5">
                               <Link className="social-icon-link facebook"
                                   to= {{pathname: "https://www.facebook.com/kingstontechnology"}}
                                   target='_blank'
                                   aria-label='Facebook'>
                                   <i className="fab fa-facebook-f"></i>
                                   </Link>  
                                   <Link className="social-icon-link instagram"
                                   to={{pathname: "https://www.instagram.com/kingstontechnology"}}
                                   target='_blank'
                                   aria-label='Instagram'>
                                   <i className="fab fa-instagram"></i>
                                   </Link>
                                   <Link className="social-icon-link youtube"
                                   to={{pathname: "https://www.youtube.com/user/KingstonTechMemory"}}
                                   target='_blank'
                                   aria-label='Youtube'>
                                   <i className="fab fa-youtube"></i>
                                   </Link>
                                   <Link className="social-icon-link twitter"
                                   to={{pathname: "https://twitter.com/kingstontech"}}
                                   target='_blank'
                                   aria-label='Twitter'>
                                   <i className="fab fa-twitter"></i>
                                   </Link>                         
                               </div>
               </section>
                </div>  
            </div>
        );
    }
}

export default BuildGuide;