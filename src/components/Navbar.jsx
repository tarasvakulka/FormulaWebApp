import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home_link: "active",
      navbarDropdown: "",
      partners_link: "",
      contacts_link: ""
    };
    this.activeHandler = this.activeHandler.bind(this);
  }

  activeHandler(e) {
    this.setState({
      home_link: "",
      navbarDropdown: "",
      partners_link: "",
      contacts_link: ""});
  
    const element = e.target.id;
    console.log(element);
    this.setState({[element]: "active"});
    var seasons = document.getElementById("navbarDropdown");
    seasons.addEventListener("click", this.activeHandler);
  }

  render() {
        return(
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="index.html"><img src="./src/images/fskpi_logo_en.png" alt=""/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
          
              <div className="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li  className="nav-item " >
                    <Link id="home_link" className={this.state.home_link + " nav-link"} to='/' onClick={this.activeHandler} >Home </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className={this.state.navbarDropdown + " nav-link dropdown-toggle"} href="#" onClick={this.activeHandler} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Seasons
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className='dropdown-item' to='/season/1'>First Season </Link>
                      <Link className='dropdown-item' to='/season/2'>Second Season </Link>
                      <Link className='dropdown-item' to='/season/3'>Third Season </Link>
                    </div>
                  </li>
                  <li className="nav-item" >
                    <Link id="partners_link" className={this.state.partners_link + " nav-link"} to='/partners' onClick={this.activeHandler}>Partners </Link>
                  </li>
                  <li className="nav-item" >
                    <Link id="contacts_link" className={this.state.contacts_link + " nav-link"} to='/contacts' onClick={this.activeHandler}>Contacts </Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <a className="btn btn-outline-light my-2 my-sm-0"  href="https://www.facebook.com/pg/fskpi/" target="_blank">Join the team</a>
                </form>
              </div>       
            </nav>
        
        );
    }
}
export default Navbar;