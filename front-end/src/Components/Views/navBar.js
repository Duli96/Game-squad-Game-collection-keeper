import React, { Component } from 'react';
import "./CSS/nav.css";
import {Link} from 'react-router-dom';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
    }




    render() {



        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-info" >
                <a className="navbar-brand" href="/"><span className= "name"><img src={require('../images/pc.png') }className="pc"/>&nbsp;GaMe SqUad</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><p className="dashboard">Dashboard</p> </a>
                        </li>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;;&nbsp;&nbsp;&nbsp;</span>


                        <li className="nav-item">
                            <a className="nav-link" href="/allGames"><p className="dashboard">View Game Collection</p></a>
                        </li>


                    </ul>



                    <span className="navbar-text">
                    <p className="dashboard"><img src={require('../images/avatar.png') }/> &nbsp;Dulini Gunasekara</p>
                    </span>
                </div>
            </nav>
            );
    }
}