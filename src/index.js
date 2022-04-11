import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header/index"
import "./index.css"
import ButtonViewPost from "./components/buttonViewPost";
import ButtonSerachPostId from "./components/buttonSerachPostId";
import ButtonTopPost from "./components/buttontoppost";
import SearchPost from "./components/searchpostcomponent";
import Viewpost from "./components/virewpostcomponent";
import TopPosts from "./components/toppost";
import Start from "./components/start";
import Filter from "./components/filter";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import ButtonFilter from "./components/buttonFilter";

const App = () => {
    return(
        <div className="global">

            <div className ="routers">

              <Router>
                  <div className="buttons">
                      <Link to = "/"></Link>
                      <Link to ="/filter"><ButtonFilter/></Link>
                      <Link to = "/search"><ButtonSerachPostId/></Link>
                      <Link to = "/posts"><ButtonViewPost/></Link>
                      <Link to = "/top"><ButtonTopPost/></Link>
                  </div>
                  <div className="routes">
                  <Routes>
                        <Route path="/filter" element = {<Filter/>}/>
                      <Route path="/search" element ={<SearchPost/>}/>
                      <Route path="/posts" element ={<Viewpost/>}/>
                      <Route path="/top" element ={<TopPosts/>}/>
                      <Route path="/" element = {<Start/>}/>
                  </Routes>
                  </div>
              </Router>
            </div>


        </div>

)
}
ReactDOM.render(<App/>,document.getElementById("root"))