import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { HashRouter as Router } from 'react-router-dom'

export default function Job({ job }) {
    const [open, setOpen] = useState(false)
    return (
        <Router>

            <Card className="mt-3">
                <Card.Body>
                    <div className="col-lg-12 col-md-12">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img
                                        className="mr-3 d-none d-md-block"
                                        height="50"
                                        src={job.company_logo}
                                        alt={job.company}
                                    />
                                </div>
                                <div className="jobs_conetent">
                                    <div style={{ wordBreak: "break-all" }} className="mr-2">
                                        <h4>{job.title}</h4>
                                    </div>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location mr-5">
                                            <p>
                                                {" "}
                                                <i className="fa fa-map-marker"></i> {job.location}
                                            </p>
                                        </div>
                                        <div className="location">
                                            <p>
                                                {" "}
                                                <i className="fa fa-clock-o"></i> {job.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div>
                                    <a
                                        href={job.company_url}
                                        className="apply_now mt-2 boxed-btn3"
                                    >
                                        Apply Now{" "}
                                    </a>
                                </div>

                                <div
                                    onClick={() => setOpen((prevOpen) => !prevOpen)}
                                    className="genric-btn success radius small mt-2"
                                >
                                    {open ? "Hide Details" : "View Details"}{" "}
                                </div>
                                <div className="date text-center">
                                    <span>{new Date(job.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Collapse in={open}>
                        <div className="mt-2">
                            <ReactMarkdown source={job.description} />
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </Router>
    )
}
