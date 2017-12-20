import React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Partners from "./Partners.jsx";
import Conatcts from "./Contacts.jsx";
import Season from "./Season.jsx";
import "./App.scss";

class App extends React.Component {
    render() {
        return (
                <HashRouter>
                    <div className="App">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/season/:id" component={Season}/>
                            <Route path="/partners" component={Partners}/>
                            <Route path="/contacts" component={Conatcts}/>
                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
        );
    }
}
export default App;