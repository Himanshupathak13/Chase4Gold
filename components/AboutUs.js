import React from "react"
import { Link } from 'react-router-dom';
import hp from "./hp.jpg";



const AboutUs = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <h1 className="mt-5 pt-5 text-center">Founder</h1>
                                <div className="row align-items-center">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="card work-desk shadow-lg overflow-hidden bg-image hover-zoom mt-5 pt-5">
                                            <img src={hp} className="m-2 p-2 img-fluid border-5 border border-secondary " alt="Image" />
                                            <h3 className="text-center">Himanshu Pathak</h3>
                                        </div>
                                    </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2 mt-5 pt-5">
                        <div className="section-title ml-lg-5">
                            <h5 className="font-weight-normal mb-3 mt-3">About Us</h5>
                            <h4 className="title ml-5 mb-4">
                                Our mission is to <br />
                                make your life easier.
                            </h4>
                            <p className="text-muted mb-0">Our Social Media Handles</p>

                            <div className="row ">
                                <div className="col-lg-6 mt-4 pt-2 ">
                                    <div className="media align-items-center rounded shadow p-3 ">
                                        <i className="fab fa-youtube h4 mb-0 text-danger"></i>
                                        <h6 className="ml-3 mb-0"><a href="https://www.youtube.com/channel/UCQpYfyhXOyzO4p1vueqb7EA" className="text-dark text-decoration-none">Youtube</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2 ">
                                    <div className="media align-items-center rounded shadow p-3 ">
                                        <i className="fab fa-facebook h4 mb-0 text-primary"></i>
                                        <h6 className="ml-3 mb-0"><a href="https://www.facebook.com/profile.php?id=100077065181963" className="text-dark text-decoration-none">Facebook</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2 ">
                                    <div className="media align-items-center rounded shadow p-3 ">
                                        <i className="fab fa-twitter h4 mb-0 text-info"></i>
                                        <h6 className="ml-3"><a href="" className="text-dark text-decoration-none">Twitter</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3 ">
                                        <i className="fab fa-instagram h4 mb-0 text-danger"></i>
                                        <h6 className="ml-3"><a href="https://www.instagram.com/chase4gold/" className="text-dark text-decoration-none">Instagram</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2 ">
                                    <div className="media align-items-center rounded shadow p-3 ">
                                        <i className="fab fa-linkedin h4 mb-0 text-info"></i>
                                        <h6 className="ml-3 "><a href="" className="text-dark text-decoration-none">LinkedIn</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3 ">
                                        <i className="fab fa-github h4 mb-0 text-secondary"></i>
                                        <h6 className="ml-3 text-justify"><a href="" className="text-dark text-decoration-none">Github</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Link to={"/"}><div className=" btn btn-outline-dark m-2">Back to Home</div></Link>
        </div>
    )
}

export default AboutUs;