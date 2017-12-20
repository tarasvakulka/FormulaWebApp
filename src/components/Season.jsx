import React from "react";
import "./Season.scss";
import seasons from "../seasons.json"

class Season extends React.Component {
    render() {
        const seasonId = this.props.match.params.id;
        const currentSeason = seasons[seasonId-1];
        console.log(seasons[0].img);
       
        return(
            <div>
                <section id="season-header" style={{backgroundImage: `url('${currentSeason.imgMain}')`}}>
                    <div className="container">
                        <div className="row align-items-center fill-viewport">
                            <div className="col-lg-12 text-center">
                                <div id="season-header-text">
                                    <h1>Season {currentSeason.id}</h1>
                                </div>
                            </div>
                        </div>       
                    </div>
                </section>

                <section id="description" className="mt-4 py-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="h1 text-dark pb-lg-5 pb-4">Description</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <p className="lead text-dark">
                                    {currentSeason.descripton}
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid rounded" src={currentSeason.imgDescription} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="season-video" className="mt-5 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="h1 text-white pb-5">Videos</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-2">
                                <iframe width="100%" height="330" src={currentSeason.videoFirst} 
                                frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-6">
                            <iframe width="100%" height="330" src={currentSeason.videoSecond}
                             frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="season-partners" className="mt-3 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1 text-center text-dark pb-1"> Season Partners</h1>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/logo_motul_cmyk.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/logo.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/Haaslogo.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/3m_logo.jpg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/Diacom.jpg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/kpi_live_logo.png" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/kostal.png" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/logo_thermacut.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/NKMZ.png" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/fm.svg" alt=""/></a></div>
                            <div className="col-4 col-md-2"><a href=""><img className="img-fluid" src="../src/images/abicor.svg" alt=""/></a></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Season;