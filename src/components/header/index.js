import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <h1 className="jt --debug">
  <span className="jt__row">
    <span className="jt__text">{this.props.name}</span>
  </span>
                    <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">{this.props.name}</span>
  </span>
                    <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">{this.props.name}</span>
  </span>
                    <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">{this.props.name}</span>
  </span>
                </h1>

            </div>
                )
    }
}
export default Header