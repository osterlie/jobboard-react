import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center">
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    Copyright &copy;
                                    {(new Date().getFullYear())}
                                    {" "}
                                    All rights reserved | This template is made with 
                                    <i className="fa fa-heart-o" aria-hidden="true"></i> {" "}
                                    by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" >Colorlib</a>
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer