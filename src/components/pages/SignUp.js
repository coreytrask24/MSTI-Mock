import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

class SignUp extends Component {
    
    state ={
        users:{
            email:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            password:'',
        }
    }
    
    
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = {...this.state.users};
        tempUser[name] = value; // student.firstName == Student['firstName']
        this.setState(
            {
                users: tempUser
            }
        );
    }

    signup = () =>{
        axios.post('http://localhost:8080/submitUserDetails', this.state.users)
        .then(response => {
            this.props.history.push('/')
        }).catch(error => {
            //Display error Messsage
        }); 
    }

    render() {
        return (
            <div className="sign-up">
                <form className="container signup-form">
                <img src="images/CUB_logo_primary.svg" className="mb-4 logo-aligner"/>
                    <h3 className="signup">Sign-up Below</h3> 
                    <div className="row mb-1 ">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="firstName" value={this.state.users.firstName} className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="lastName" value={this.state.users.lastName} className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="phoneNumber" value={this.state.users.phoneNumber} className="form-control" placeholder="Telephone" aria-label="Telephone" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="email" value={this.state.users.email} className="form-control" placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="col">
                            <input type="password" onChange={this.handleChange} name="password" value={this.state.users.password} className="form-control" placeholder="Password" aria-label="Password" />
                        </div>
                    </div>
                    <div class="d-grid gap-2 ">
                    <button onClick={this.signup} class="btn-shrink btn--outline" type="button">Sign-up</button>
                    </div>
                </form>

            </div>

        );
    }
}

export default SignUp;


// import React, { Component } from 'react';
// import axios from 'axios';
// import '../../App.css';

// export default function Services() {
//     return <h1 className='sign-up'>Sign Up</h1>
// }
