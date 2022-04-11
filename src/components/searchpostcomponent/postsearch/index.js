import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


class SearchPost extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <div className="center">
                <h1>{this.props.id}</h1>
                <h6>{this.props.title}</h6>
                <h5>{this.props.body}</h5>
            </div>
        )
    }
}
export default SearchPost