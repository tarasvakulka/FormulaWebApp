import React from "react";
import "./Home.scss";

class Home extends React.Component {
    render() {
        return(
            <div>
                <section id="header">
                    <div className="container">
                        <div className="row align-items-center fill-viewport">
                            <div className="col-lg-12 text-center">
                                <div id="header-text">
                                    <h1>Formula Student</h1>
                                    <p>
                                        National Technical University of Ukraine <br/>
                                        "Igor Sikorsky Kyiv Polytecnic Institute"
                                    </p> 
                                </div>
                            </div>
                        </div>       
                    </div>
                </section>
                
                <section id="about" className="mt-4 py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-dark pb-5">About us</h1>
                            </div>
		                </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p  className="lead text-dark">
                                    We are Formula Student KPI team. Members of our organithation
                                    meet on weekends and do our racing car for Formula Student
                                    competition. We are the best team in Ukraine.
                                </p>
                                <p className="lead text-dark">
                                    Formula Student is a student engineering competition held annually
                                    in the UK. Student teams from around the world design, build
                                    and race a small-scale formula style racing car.
                                </p>
                                <p className="lead text-dark">
                                    The cars are judged on a number of criteria as listed below. It is
                                    run by the Institution of Mechanical Engineers and uses the same rules
                                    as the original Formula SAE with supplementary regulations. There are two
                                    entry classes in Formula Student.
                                </p>
                                    
                            </div>
                            <div className="col-lg-6 text-center">
                                    <img className="img-fluid rounded" id="team-foto" src="../src/images/team1.jpg" alt="FS team"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cars" className="mt-5 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-white pb-2 pb-5">Cars</h1>
                            </div>
                        </div>
                        <div className="row text-center text-white">
                            <div className="col-lg-4">
                                <a href="#/season/1" onClick={() => window.scrollTo(0,0)}>
                                    <img className="car-img rounded img-effect mb-3" src="../src/images/first-car-b.jpg" alt=""/>
                                    <h2 className="pb-3">Season #1</h2>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#season/2" onClick={() => window.scrollTo(0,0)}>
                                    <img className="car-img rounded img-effect mb-3" src="../src/images/second-car.jpg" alt=""/>
                                    <h2 className="pb-3">Season #2</h2>
                                </a>
                            </div>
                            <div className="col-lg-4" onClick={() => window.scrollTo(0,0)}>
                                <a href="#season/3">
                                    <img className="car-img rounded img-effect mb-3" src="../src/images/car_season3.jpg" /*style={{filter: 'invert(1)', height: '81%'}}*/ alt=""/>
                                    <h2 className="pb-3">Season #3</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="get-involved" className="mt-4 py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-dark pb-5">Get involved</h1>
                            </div>
                        </div>
                        <div className="row text-center text-white">
                            <div className="col-lg-4 img-effect">
                                <a href="https://www.facebook.com/fskpi/" target="_blank">
                                    <img className="img-fluid rounded mb-3" src="../src/images/donate-boy.png" alt=""/>
                                    <h2 className="donate-text">Donate pls</h2>
                                </a>
                            </div>
                            <div className="col-lg-4 img-effect">
                                <a href="https://www.facebook.com/fskpi/" target="_blank">
                                    <img className="img-fluid rounded mb-3" src="../src/images/vault-boy1.jpg" alt=""/>
                                    <h2 className="donate-text">Become a partner</h2>
                                </a>
                            </div>
                            <div className="col-lg-4 img-effect">
                                <a href="https://www.facebook.com/fskpi/" target="_blank">
                                    <img className="img-fluid rounded mb-3" src="../src/images/repairs.jpg" /*style={{filter: 'invert(1)', height: '81%'}}*/ alt=""/>
                                    <h2 className="donate-text">Join the team</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="social-networks" className="mt-5 py-4 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-white pt-2 pb-5">Social networks</h1>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <a href="https://www.youtube.com/channel/UCPhUeYm60qiJSyVkDcmtLFg" target="_blank">
                                    <img className="img-fluid img-effect mb-3" src="../src/images/youtube.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://www.facebook.com/fskpi/" target="_blank">
                                    <img className="img-fluid img-effect mb-3" src="../src/images/facebook.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://www.instagram.com/formulakpi/" target="_blank">
                                    <img className="img-fluid img-effect mb-3" src="../src/images/instagram.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="partners" className="mt-3 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-dark pb-5"> Our Partners</h1>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/logo_motul_cmyk.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/logo.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/Haaslogo.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/3m_logo.jpg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/Diacom.jpg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/kpi_live_logo.png" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/kostal.png" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/logo_thermacut.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/NKMZ.png" alt=""/></a></div>
                            <div className="col-4 col-md-2 m-2"><a href=""><img className="img-fluid" src="../src/images/abicor.svg" alt=""/></a></div>
                        </div>
                    </div>
                </section>

            </div>
        
        );
    }
}
export default Home;