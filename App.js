import React from 'react'
import Home from './components/Home';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import SportsPage from './pages/SportsPage';
import NavBar from "../src/components/NavBar";
import {gameData} from '../src/data'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Facts from './components/Facts';
import Footer from './components/Footer';
import ListOfSports from './components/ListOfSports';


function App() {
  return (
    <div >
     
      <Router>
      <NavBar/>
      
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ListOfSports" component={ListOfSports} />
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/Facts" component={Facts} />
      <Route exact path="/Hockey" children={<SportsPage sport={gameData[0]} />}/>
      <Route exact path="/Table-tennis" children={<SportsPage sport={gameData[1]} />}/>
      <Route exact path="/Badminton" children={<SportsPage sport={gameData[2]} />}/>
      <Route exact path="/Javelin-throw" children={<SportsPage sport={gameData[3]} />}/>
      <Route exact path="/Volleyball" children={<SportsPage sport={gameData[4]} />}/>
      <Route exact path="/Lawn-tennis" children={<SportsPage sport={gameData[5]} />}/>
      <Route exact path="/Swimming" children={<SportsPage sport={gameData[6]} />}/>
      <Route exact path="/Weightlifting" children={<SportsPage sport={gameData[7]} />}/>
      <Route exact path="/Archery" children={<SportsPage sport={gameData[8]} />}/>
      <Route exact path="/Golf" children={<SportsPage sport={gameData[9]} />}/>
      

      <Route exact path="*" component={PageNotFound} />
            


       </Switch>
       <Footer/>
       
        

    </Router>

      
    </div>
  );
}

export default App;
