import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
    render() {
        return (
            
              <footer className="footer mt-3 py-3">
                <div className="container">
                    <div className="row align-items-start ">
                        <div className="col-lg-4 ">
                            <h5 className="text-center py-2">About</h5>
                            <p>
                                Formula Student is a student engineering competition
                                held annually in the UK.
                            </p>  
                            <p>
                                Student teams from around the
                                world develop and race a small-scale formula style racing car.
                            </p>
                            <p className="pt-3" >© Formula Student KPI, 2017</p>
                        </div>
                        <div className="col-lg-4 ">
                            <h5 className="text-center py-2">Links</h5>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li>
                                    <a href="#">Season</a>
                                    <ul className="footer-list">
                                        <li><a href="#season/1">First season</a></li>
                                        <li><a href="#season/2">Second season</a></li>
                                        <li><a href="#season/3">Third season</a></li>
                                    </ul>
                                </li>
                                <li><a href="#partners">Partners</a></li>
                                <li><a href="#contacts">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 ">
                            <h5 className="text-center py-2">Contacts</h5>
                            <ul>
                                <li className="pb-2"> Phone +380 (097) 979 79 79</li>
                                <li className="pb-2"><img className="pr-2 pb-1" src="./src/images/email_icon.png" alt=""/><a href="mailto:formulakpi@gmail.com" target="_blank">formulakpi@gmail.com</a></li>
                                <li className="pb-2"><img className="pr-2 pb-1" src="./src/images/instagram_icon.png" alt=""/><a href="https://www.instagram.com/formulakpi/" target="_blank">formulakpi</a></li>
                                <li className="pb-2"><img className="pr-2 pb-1" src="./src/images/site_icon.png" alt=""/><a href="https://www.facebook.com/pg/fskpi/" target="_blank">@fskpi</a></li>
                                <li className="pb-2"><a className="btn btn-outline-light my-2 my-sm-0"  href="https://www.facebook.com/fskpi/" target="_blank">Join the team</a></li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
              </footer>
            

        );
    }
}
export default Footer;