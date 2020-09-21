import React, { Component } from "react";
import { Link, HashRouter as Router } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Router>

                    <div class="header-area ">
                        <div id="sticky-header" class="main-header-area">
                            <div class="container-fluid ">
                                <div class="header_bottom_border">
                                    <div class="row align-items-center">
                                        <div class="col-xl-3 col-lg-2">
                                            <div class="logo">
                                                <Link to="index.html">
                                                    <img src="img/logo.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-7">
                                            <div class="main-menu  d-none d-lg-block">
                                                <nav>

                                                </nav>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                            <div class="Appointment">
                                                <div class="phone_num d-none d-xl-block">

                                                </div>
                                                <div class="d-none d-lg-block">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </Router>
                </header>
                <div class="bradcam_area bradcam_bg_1">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="bradcam_text">
                                    <h3>Search For Developer Jobs</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
