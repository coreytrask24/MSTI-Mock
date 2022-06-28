import React, { Component } from 'react';
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import './Popup.css';
import axios from 'axios';

class Popup extends Component {
    
    state ={
        
      users:{
          email:'',
          password:''
      }
  }

  handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const tempUser = {...this.state.users};
      tempUser[name] = value; // User.firstName == User['firstName']
      this.setState(
          {
              users: tempUser
          }
      );
  }

   login = () => {
      axios.post('http://localhost:8080/login', this.state.users)
      .then(response => {
          localStorage.setItem("loggedInUser", response.data.email);
          this.props.history.push('/')
      }).catch(error => {
//         <div id="myModal" class="modal">
//           <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>Some text in the Modal..</p>
//   </div>

// </div>
      }); 
  }

  
  // export default function Popup(props) {
     
  //   return (
      
  //           <Dialog open={openPopup} className="shadow">
  //              <div className="popup-box"><button type="submit" onClick={()=>{setOpenPopup(false)}} className="thex">X</button>
  //              <DialogTitle>
  //               <div className="centering width">Please Sign-In 
  //               </div>
  //               </DialogTitle>
                
  //               <DialogContent>
  //               <form> 
  //       <i className="mb-4 fa fa-memory align"></i> 
  //       <label for="inputEmail" className="visually-hidden">Email address</label>
  //       <input type="email" id="inputEmail" className="form-control margin-push" placeholder="Email address" required="" autofocus=""/>
  //       <label for="inputPassword" className="visually-hidden">Password</label>
  //       <input type="password" id="inputPassword" className="form-control margin-push" placeholder="Password" required=""/>
  //       <div className="checkbox mb-3">
  //         <label>
  //           <input type="checkbox" value="remember-me" className="remember"/> Remember me
  //         </label>
  //       </div>
  //       <button className="w-100 btn--outline" type="submit">Sign in</button>
  //       <p className="mt-5 mb-3 centering">2020-2021</p>
        
  //     </form>
  //               </DialogContent>
  //               </div>
  //           </Dialog>
    
    
  //       )
  //   }

  render(){

    let signInSignOut = ( <form> 
     <img src="images/CUB_logo_primary.svg" className="align mb-4 logo-align"/>
    <input type="email" onChange={this.handleChange} name="email" value={this.state.users.email} className="form-control margin-push" placeholder="Email address"/>
    <input type="password" onChange={this.handleChange} name="password" value={this.state.users.password} className="form-control margin-push" placeholder="Password"/>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" className="remember"/> Remember me
      </label>
    </div>
    <button onClick={this.login} className="w-100 btn--outline" type="submit">Sign in</button>
    <p className="mt-5 mb-3 centering">2020-2021</p>
    
  </form>);
    
    return (
      
        <Dialog open={this.props.openPopup} className="shadow">
           <div className="popup-box"><button type="submit" onClick={()=>{this.props.setOpenPopup(false)}} className="thex">X</button>
           <DialogTitle>
            <div className="centering width">Please Sign-In 
            </div>
            </DialogTitle>
            
            <DialogContent>
            {signInSignOut}
            </DialogContent>
            </div>
        </Dialog>


    )
}
}
export default Popup;