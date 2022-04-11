import React from "react";
import ReactDOM from "react-dom";
import Header from "../header";
import "./index.css"



class Start extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <Header name="menu"/>
            </div>
        )
    }
}
export default Start