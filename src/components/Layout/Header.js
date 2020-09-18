import React, { Component } from "react";
import { Link, HashRouter as Router } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Router>
                        <div className="header-area ">
                            <div id="sticky-header" className="main-header-area">
                                <div className="container-fluid ">
                                    <div className="header_bottom_border">
                                        <div className="row align-items-center">
                                            <div className="col-xl-3 col-lg-2">
                                                <div className="logo">
                                                    <Link to="/">
                                                        <img src="img/logo.png" alt="logo" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Router>
                </header>

                <div className="slider_area">
                    <div className="single_slider  d-flex align-items-center slider_bg_1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-6">
                                    <div className="slider_text">
                                        {/* <h5
                                        className="wow fadeInLeft"
                                        data-wow-duration="1s"
                                        data-wow-delay=".2s"
                                        >
                                        4536+ Jobs listed
                                        </h5> */}
                                        <h3
                                            className="wow fadeInLeft"
                                            data-wow-duration="1s"
                                            data-wow-delay=".3s"
                                        >
                                        Developer Jobs For You
                                        </h3>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ilstration_img wow fadeInRight d-none d-lg-block text-right" data-wow-duration="1s" data-wow-delay=".2s">
                        <img src="img/banner/illustration.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
