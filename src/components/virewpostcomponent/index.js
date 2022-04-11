import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import PostsFetch from "./postscomponent";
import Header from "../header";

class Posts extends React.Component{
    constructor() {
        super();
        this.state = {
            loading:true,
            posts:[]
        }

    }
    componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok){
                    return response.json()
                }
            }).then(posts =>
            this.setState({
                posts,
                loading:false
            }))
    }


render() {
        const {loading,posts} = this.state
        if(loading){
            return <div>
             Loading.....
            </div>
        }

        return(
            <div>
                <Header name="All Posts"/>
                {
                    [
                        posts.map(posts =>{
                            return (
                                <PostsFetch id = {posts.id} title = {posts.title} body = {posts.body}/>
                            )
                        })
                    ]
                }
            </div>

        )
    }
}
export default Posts