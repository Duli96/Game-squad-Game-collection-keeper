import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import AddGameForm from './Components/Admin/AddGameForm';
import AllGames from './Components/Admin/AllGames';
import EditGame from './Components/Admin/editGame';
import Dashboard from "./Components/Admin/Dashboard";
import NavBar from "./Components/Views/navBar"
import Footer  from "./Components/Views/footer";
function App() {
  return (
    <div >

        <div>

            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/edit" exact component={EditGame}/>
                    <Route path="/addGame" exact component={AddGameForm}/>
                    <Route path="/allGames" exact component={AllGames}/>

                </Switch>
                <Footer/>
            </Router>


        </div>
    </div>
  );
}

export default App;
