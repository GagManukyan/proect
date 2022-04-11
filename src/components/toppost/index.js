import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import PostsFetch from "../virewpostcomponent/postscomponent";
import Header from "../header";
class TopPosts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            posts:[],
            top:10,
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
                loading:false,

            }))
    }
    changeTopNumber =(event) =>{
        this.setState(
            {
                top:+event.target.value
            }
        )
    }

    render() {
        const {loading,posts,top} = this.state
        if(loading){
            return <div>
                Loading.....
            </div>
        }
        return(
            <div>
                <div className="box">
                    <Header name="Top posts"/>
                    <select onChange={this.changeTopNumber}>
                        Top
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                </div>
                {
                    [
                        posts.map((posts) => {
                            if (posts.id <= top){
                                return (
                                    <PostsFetch id = {posts.id} title = {posts.title} body = {posts.body}/>
                                )
                            }
                        } )
                    ]
                }

            </div>
        )
    }
}
export default TopPosts