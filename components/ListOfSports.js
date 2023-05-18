import React from 'react'
import { gameData } from "../data";
import { Button, Row, Col } from 'rsuite';
import { Link } from 'react-router-dom';
import hockey from "./hockey.jfif";
import archery from "./Archery.jpg";
import tennis from "./tennis.jfif";
import badminton from "./badminton.jpg";
import golf from "./golf.jfif";
import tabletennis from "./tabletennis.jpg";
import volleyball from "./volleyball.jfif";
import Swimming from "./Swimming.jfif";
import weightlifting from "./weightlifting.jfif";
import javelin from "./javelinthrow.jpg";


const ListOfSports = () => {

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
      <div className='mt-5 mb-5 pt-5 p-2 text-center btn-dark'>
        <h3>CHOOSE YOUR SPORT </h3>
      </div>
      <section>
        <div className='container'>
          <div className='row'>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={hockey} className="card-img-top" alt="" />
                <Link to={"/Hockey"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}} >Hockey</div> </Link>
              </div>
            </div>


            <div className="col-sm-6 ">
              <div className="card mb-2">
                <img src={tabletennis} className="card-img-top" alt="" />
                <Link to={"/Table-tennis"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Table-tennis</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={badminton} className="card-img-top" alt="" />
                <Link to={"/Badminton"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Badminton</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={javelin} className="card-img-top" alt="" />
                <Link to={"/Javelin-throw"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Javelin-throw</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={volleyball} className="card-img-top" alt="" />
                <Link to={"/Volleyball"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Volleyball</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={tennis} className="card-img-top" alt="" />
                <Link to={"/Lawn-tennis"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Lawn-tennis</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={Swimming} className="card-img-top" alt="" />
                <Link to={"/Swimming"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Swimming</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={weightlifting} className="card-img-top" alt="" />
                <Link to={"/Weightlifting"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Weightlifting</div> </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={archery} className="card-img-top" alt="" />
                <Link to={"/Archery"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Archery</div> </Link>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card mb-2">
                <img src={golf} className="card-img-top" alt="" />
                <Link to={"/Golf"}> <div className="fw-bold fs-5 btn card-body text-decoration-none btn btn-outline-dark ml-2 mr-2 mt-2 mb-2"style={{width:"100%"}}>Golf</div> </Link>
              </div>
            </div>
          </div>
        </div>

    </section >
    <Link to={"/"}><div className="btn btn-outline-dark m-2">Back to Home</div></Link>
    </div>
  )
}

export default ListOfSports;

