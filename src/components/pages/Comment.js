import React, { Component } from 'react';
import '../../App.css';
import '../ForumPost.css';
import axios from 'axios';

class Comment extends Component {

    //  constructor(props){
    //      super(props);
    //      console.log(props.match.params.id + ": sahibgciadof")
    //  }

    state = {
        post: {
            topic: '',
            description: '',
            createdDate:'',
            user:{email:localStorage.getItem("loggedInUser")},
            comments: []
        },
        comment: {
            message:'',
            createdDate:'',
            user:{email:localStorage.getItem("loggedInUser")},
            post:{id:this.props.match.params.id}
        },
        // comments: []
    }


    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempComment = { ...this.state.comment };
        tempComment[name] = value;
        this.setState(
            {
                comment: tempComment
            }
        );
    }

    newComment = () => {
        axios.post('http://localhost:8080/submitComment', this.state.comment)
            .then(response => {
                this.props.history.push(`/comment/${this.state.comment.post.id}`);
                window.location.reload(false)
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
                            <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                            <textarea class="form-control" onChange={this.handleChange} name="message" value={this.state.comment.message} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div>
                            <button type="button" onClick={this.newComment} className="btn--outline outline">Submit</button>
                        </div>
                    </form>
                </div>
            );
        }
    }


    componentDidMount() {
        const params = {postId:this.state.comment.post.id}; 
        axios.get('http://localhost:8080/findPost', {params})
            .then(response => {
                this.setState({
                    post: response.data
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
                        {/* {this.getSignInSignOut()} */}


                        
                    
                                <div className="col padd">
                                    <div className="card-mod"> 
                                        <div className="card-body body-of-card">
                                            <h1 className="date text-muted">Created: {this.state.post.createdDate}</h1>
                                            <h1 className="user-name text-muted">Posted By: {this.state.post.user.firstName}</h1>
                                            <p className="card-text-topic">Topic: {this.state.post.topic} </p>
                                            <p className="card-text-discription">Discription: {this.state.post.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group btn-push">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Upvote 22</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Downvote 83</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
              
                        

                        {this.state.post.comments.map((comment, index) => {
                            return (
                                <div className="col padd">
                                    <div className="card-mods"> 
                                        <div className="card-body body-of-cards">
                                        <h1 className="date-c text-muted">Created: {comment.createdDate}</h1>
                                            <p className="user-name-c text-muted">Comment By: {comment.user.firstName}</p>
                                            <p className="card-text-topics">{comment.message} </p>
                                            <div className="d-flex justify-content-between align-items-center no-push">
                                                <div className="btn-group btn-push">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Upvote 22</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Downvote 83</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    
                    {this.getSignInSignOut()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Comment;