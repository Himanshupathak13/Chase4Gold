import React from 'react'
import { Link } from 'react-router-dom';
import o1 from "./o1.jpg"
const SportsPage = ({sport}) => {
    return (
        <div className='mt-5'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <div className="btn m-4 mt-5"style={{backgroundColor:"#f9ca24"}}>{sport.Sport_Name}</div>

           <div className='m-4 mt-2 pt-2'> { 
              sport.History.map(details => (
              <div className="row">
              <div className="">{details}</div>
             </div>))
           }</div>
           
           <div className='m-4 pt-4'>{ 
              sport.Rules.map(details => (
             <div className="row">
              <div className="">{details}</div>
             </div>))
           }</div>
           <div className='m-4 pt-4'>{
             sport.Supplements.map(details => (
             <div className="row">
              <div className="">{details}</div>
             </div>))
           }</div>
          
          <div className='m-4 pt-4'> { 
              sport.Awards_Honours.map(details => (
             <div className="row">
              <div className="">{details}</div>
             </div>))
          }
          </div>
          
          
            <Link to={"/"}><div className="btn btn-outline-dark m-3 mt-3">Back to Home</div></Link>
            
        </div>
        
    )
}

export default SportsPage;
