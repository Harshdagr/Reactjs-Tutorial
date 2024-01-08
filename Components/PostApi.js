import React, { Component } from "react";
import axios from "axios";

export class PostApi extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userid: [],
            title: [],
            body: [],
        
        }

    }

    HandlerAll = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidUpdate() {
        console.log(this.state.userid)
        console.log(this.state.title)
        console.log(this.state.body)
    }
    Handlesubmit = (event) => {

        // alert(this.state.userid)
        event.preventDefault()  
        axios.post("https://jsonplaceholder.typicode.com/posts" ,this.state)
            .then(response => {
                this.setState({
                    post:response.data
                })
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {
        const {userid ,title , body ,post }= this.state;
        return (
            <div>
                <form onSubmit={this.Handlesubmit}>
                    <label>user id:</label>
                    <input type="text" value={userid} name="userid" onChange={this.HandlerAll}></input>
                    <br></br>
                    <label>title:</label>
                    <input type="text" value={title} name="title" onChange={this.HandlerAll}></input>
                    <br></br>
                    <label>body:</label>
                    <input type="text" value={body} name="body" onChange={this.HandlerAll}></input>
                    <button >Submit</button>
                    {/* {post.map(post => <div key={post.id}>{post.title}</div>)} */}
                </form>
            </div>
        );
    }
}

export default PostApi;
