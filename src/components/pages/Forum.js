import React, { Component } from 'react';
import '../../App.css';
import '../ForumPost.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Forum extends Component {


    state = {
        post: {
            topic: '',
            description: '',
            createdDate:'',
            user:{email:localStorage.getItem("loggedInUser")}
        },
        posts: []
    }


    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempPost = { ...this.state.post };
        tempPost[name] = value;
        this.setState(
            {
                post: tempPost
            }
        );
    }

    newPost = () => {
        axios.post('http://localhost:8080/submitPost', this.state.post)
            .then(response => {
                this.props.history.push('/')
            }).catch(error => {
                //Display error Messsage
            });
    }

    getSignInSignOut = () => {
        if (localStorage.getItem("loggedInUser")) {
            console.log('userloggedin');
            return (
                <div className="topics">
                    <form className="post-form">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Topic</label>
                            <input type="text" onChange={this.handleChange} name="topic" value={this.state.post.topic} class="form-control" id="exampleFormControlInput1" placeholder="Topic..." />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <textarea class="form-control" placeholder="Description..." onChange={this.handleChange} name="description" value={this.state.post.description} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div>
                            <button type="button" onClick={this.newPost} className="btn--outline outline">Submit</button>
                        </div>
                    </form>
                </div>

            );
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/findAll')
            .then(response => {
                this.setState({
                    posts: response.data
                });
            }).catch(error => {
                //display error message
            });
    }

    render() {
        return (
            <div>
            

                <div className="forum">
                
                    <div className="post">
                   
                        {this.getSignInSignOut()}


                        {this.state.posts.map((post, index) => {
                            return (
                                <div className="col padd">
                                    <Link to={`/comment/${post.id}`} className="post-page">
                                        <div className="card-mod">
                                        <div className="card-body body-of-card">
                                            <h1 className="date text-muted">Created: {post.createdDate}</h1>
                                            <h1 className="user-name text-muted">Posted By: {post.user.firstName}</h1>
                                            <p className="card-text-topic">Topic: {post.topic} </p>
                                            <p className="card-text-discription">Discription: {post.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group btn-push">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary selector">Upvote</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary selector">Downvote</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                  </div>
                 </div>
             
        );
    }
}

export default Forum;