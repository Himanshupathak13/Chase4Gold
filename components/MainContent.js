import React from 'react'
import { Row, Col } from 'rsuite'

import o9 from "./o9.jpg";
import v2 from "./v2.jpg";

import v7 from "./v7.jpeg"
import car from "./car.jpg"




const MainContent = () => {

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <section>
                
                    <div className="text-white text-center bg-dark pt-3 mt-3">
                                        <h1 className="mt-5">Hey! Energetic Youth👋</h1>
                                        <h4 className="pb-3">WELCOME TO CHASE4GOLD</h4>
                                    </div>
                                    <img src={car} className="mt-0 border-5 border border-dark"style={{width:"100%" ,height:"25%"}}/></section>
                        
                
            
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="card mb-2 mt-3">
                                <img src={o9} alt="hp" className=" img-fluid border border-dark d-inline w-5 h-5 m-3 ml-3" />
                                <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Aim</div>
                                <p className='mt-2 mb-2 ml-2 mr-2 fw-bolder'style={{fontFamily: "Snell Roundhand, cursive",color:"#FF851B"}}>The main purpose to make this website is to influence our youth to participate in all the Olympics games and make their career in different sports, by this website we will provide necessary details to all the youth future representatives of India about the rules,history, supplements and potential required for all different Olympics games so India can win more medals and become the Super Power in future Olympics.
                                </p>
                            </div>
                        </div>


                        <div className="col-sm-4 ">
                            <div className="card mb-2 mt-3">
                            <img src={v7} alt="hp" className=" img-fluid  border border-dark d-inline w-4 h-4 m-3 ml-3" />
                            <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Content</div>
                                <p className='mt-2 mb-2 ml-2 mr-2 fw-bolder'style={{fontFamily: "Snell Roundhand, cursive",color:"#120E43"}}>In sports page you can choose your favourite sport and get information about history,rules,supplements required,honours and awards and great representatives of our country.We are also showing some facts related to sports on facts page.You will get all information of team members on about us page and we have provided links from where you can follow us on our social media handles.You can also contact us from Contact us page. 
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mb-2 mt-3">
                                <img src={v2} alt="hp" className="border border-dark d-inline w-5 h-20 m-3 ml-3" />
                                <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Future Plans</div>
                                <p className='mt-2 mb-2 ml-2 mr-2 fw-bolder'style={{fontFamily: "Snell Roundhand, cursive",color:"#2ECC40"}}>In future,we will provide sources for courses on different sports so you can develop your skills in that particular game.We will also provide you information about paralympics too it's rules,history,supplements required and great representatives of our country.We will add more sports of olympics.We will also add payment gateway for courses.CHASE4GOLD will be the only website which shows data of sports of Olympics.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContent
