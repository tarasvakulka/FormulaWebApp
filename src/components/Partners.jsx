import React from "react";
import "./Partners.scss";

class Partners extends React.Component {
    render() {
        return(
            <div>
                <section id="partners-header" style={{backgroundImage:  "url('./src/images/partners.png')"}}>
                    <div className="container">
                        <div className="row align-items-center fill-viewport">
                            <div className="col-lg-12 text-center">
                                <div id="partners-header-text">
                                    <h1 className="h1">Partners</h1>
                                </div>
                            </div>
                        </div>       
                    </div>
                </section>

                <section id="our-partners" className="mt-3 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-dark pb-5"> Our Partners</h1>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/logo_motul_cmyk.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/logo.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/Haaslogo.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/3m_logo.jpg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/Diacom.jpg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/kpi_live_logo.png" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/kostal.png" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/logo_thermacut.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/NKMZ.png" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="./src/images/abicor.svg" alt=""/></a></div>
                        </div>
                    </div>
                </section>

                <section id="media">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-dark p-2"> Media about us</h1>
                            </div>
                        </div>
                        <div className="row align-items-center text-center">
                            <div className="col-md-4 py-5">
                                <a href="https://1plus1.ua/" target="_blank">
                                    <img className="img-fluid" src="./src/images/1+1.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-4 py-5">
                                <a href="https://www.unian.ua/" target="_blank">
                                    <img className="img-fluid" src="./src/images/unian.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-4 py-5">
                                <a href="http://www.pravda.com.ua/" target="_blank">
                                    <img className="img-fluid" src="./src/images/up-logo_ukr.svg" alt=""/>
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}
export default Partners;