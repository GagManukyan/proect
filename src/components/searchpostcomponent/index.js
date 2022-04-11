
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import SearchPost from "./postsearch";
import {logDOM} from "@testing-library/react";
import Header from "../header";

class FinallyPost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            posts:[],
            inputvalue:[]
        };
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
                inputvalue:[]
            }))
    }




    render() {
        console.log("render")
        let {loading,posts,inputvalue} = this.state
        let value = 0;
        function getInputValue(event){
            value = +event.target.value
            console.log(value)
        }
        let finalValue = []
        // function finallPost (){
        //     finalValue = posts.filter(elem => elem.id === value)
        //     console.log(finalValue)
        //     return finalValue
        //
        // }

        return(
            <div>
                <div className="form__group field">
                    <Header name="search post"/>
                    <input onInput={getInputValue} type="input" className="form__field" placeholder="Please Print Post Id " name="name" id='name' required/>
                    <label htmlFor="name" className="form__label"></label>
                    <button className="button" onClick={()=>{
                            finalValue = posts.filter(elem => elem.id === value)
                            console.log(finalValue)
                            this.setState({
                                posts,
                                loading:false,
                                inputvalue:finalValue
                            })
                    }}>search</button>
                    {
                        [
                            inputvalue.map((elem) =>  <SearchPost id = {elem.id} title = {elem.title} body = {elem.body}/>)
                        ]
                    }


                </div>
            </div>

        )
    }
}
export default FinallyPost