import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { gameData } from '../data';

import MainContent from './MainContent';


import { Link } from 'react-router-dom';


const Home = () => {
  const [sheetData, setSheetData] = useState([]);


  return (
    <div>
    


       
       <MainContent/>
       

      
    </div>
  )
}
export default Home;