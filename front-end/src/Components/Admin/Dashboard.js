import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import  {withRouter} from 'react-router-dom';

class Dashboard extends React.Component{



    //-----go to add games page----

    addGame = () =>{


        this.props.history.push('/addGame');

    }

    //-----redirect to all games------

    DisplayAll = () =>{
        console.log("home");
        this.props.history.push('/allGames');
    }
    render(){

        return(
            <div>
                <br/><br/>
                <Container className = "dash">
                  <br/><br/>
                  <center>
                  <h1 className= "title">Dashboard</h1>
                      <h4 className= "title">Welcome To Game Squad</h4>
                      <br/><br/><br/><br/>
                      <button type="button" className="btn btn-primary btn-lg" onClick={this.addGame}>Add Game</button>
                      &nbsp;
                      <button type="button" className="btn btn-success btn-lg" onClick={this.DisplayAll}>View All Games</button>
                      <br/><br/><br/><br/><br/>
                  </center>
                </Container>

            </div>
        );
    }

}

export default withRouter (Dashboard);