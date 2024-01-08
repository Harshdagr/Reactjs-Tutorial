import React, { Component } from "react";
import axios from "axios";

export class GetApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            error: "",
        };
    }
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")

            .then((response) => {
                this.setState({
                    post: response.data,
                });
                console.log(response);
            })
            .catch((error) => {
                this.setState({
                    error: "url error",
                });
                console.log(error);
            });
    }

    render() {
        const { post, error } = this.state;
        return (
            <div>
                <h1>Hello Get Api</h1>

                {post.length
                    ? post.map((post) => <div key={post.id}>{post.name} </div>)
                    : null}
                {error ? <div>{error} </div> : null}
            </div>
        );
    }
}

export default GetApi;
