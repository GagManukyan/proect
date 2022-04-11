import React from "react";
import ReactDOM from "react-dom";
import Header from "../header";
import './index.css'
import PostsFetch from "../virewpostcomponent/postscomponent";



class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            posts:[],
            top:0,
            filterNameMod:"none",
        }

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
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
    changeFilterNames = (event) =>{
        this.setState(
            {
              filterNameMod:event.target.value
            }
        )


    }

    render() {

        const {loading,posts,top,filterNameMod} = this.state
        let sort = [...posts]
            sort.sort(
            function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            }
        )
        function finaly(){

        }

        if(loading){
            return <div>
                Loading.....
            </div>
        }
        return(
            <div className="center">
            <div>
                <Header name="Users"/>
            </div>
                <div className="boxs">
                    <h1>FILTER USER ID</h1>
                    <div className="box">
                        <select onChange={this.changeTopNumber}>
                            Top
                            <option>0</option>
                            <option>2</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                        </select>

                    </div>
                    <h1>FILTER USERS NAMES</h1>
                    <div className="box">
                        <select onChange={this.changeFilterNames}>
                            Top
                            <option>none</option>
                            <option>ALPHAVITE</option>
                        </select>

                    </div>
                    {
                        [
                            posts.map((posts) => {
                                if (posts.id <= top && filterNameMod === "none"){
                                    return (
                                        <PostsFetch id = {posts.id} title = {posts.name} body = {posts.email}/>
                                    )
                                }
                            } )

                        ]

                    }
                    {
                        [
                            sort.map((elem) =>{
                                if (filterNameMod === "ALPHAVITE" && elem.id <= top){
                                    return (
                                        <PostsFetch id = {elem.id} title = {elem.name} body = {elem.email}/>
                                    )
                                }
                            })
                        ]
                    }



                </div>
            </div>
        )
    }
}

export default Filter