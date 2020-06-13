import React, { Component } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/Game.css'
import  {withRouter} from 'react-router-dom';

class EditGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gName: "",
            gCategory: "",
            ageRange: "",
            image: "",
            description: "",
            gameId: props.location.state.gameId,
            game: []


        }
    }


    callAPI = async  ()=> {


        await fetch("http://localhost:4000/game/"+this.state.gameId)
            .then(res => res.json())
            .then(json => this.setState({

                game: json,
                gName: json[0].gName,
                gCategory: json[0].gCategory,
                ageRange: json[0].ageRange,
                description:json[0].description,
                loading: false,
                isEmpty: false,


            }));


    }


    componentDidMount() {
        this.callAPI();
    }

    //----save images in cloud storage----
    ImageUpload = async e =>{

        const files = e.target.files;
        const data = new FormData();
        data.append('file',files[0]);
        data.append('upload_preset','gameImage');
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dxmohgnqk/image/upload',
            {
                method:'POST',
                body:data
            }
        )
        const file = await res.json();
        this.setState({
            image:file.secure_url
        })
        console.log(file.secure_url);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //make post request



        let updatedetails = {
            gName: this.state.gName,
            gCategory: this.state.gCategory,
            ageRange: this.state.ageRange,
            description:this.state.description,
        }

        //---send patch request to update quantity------
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedetails)
        };

        const response = await  fetch('http://localhost:4000/game/'+this.state.gameId, requestOptions);
        this.DisplayAll();
    }

    //-----redirect to all games------

    DisplayAll = () =>{
        console.log("home");
        this.props.history.push('/allGames');
    }

    render() {


        let list = this.state.game;
        return (
            <center>
                <Container className = "form">
                <br/><br/>
                    <div className="addgameContainer" >
                        <div className="row">



                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3"><b>Edit Game Details</b></h4>

                                <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>



                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default"> Name</span>
                                        </div>
                                        <input type="text" name="gName" value={this.state.gName} onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                                    </div>


                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text"
                                                   htmlFor="inputGroupSelect01">Category</label>
                                        </div>
                                        <select name="gCategory" className="custom-select" onChange={this.handleChange}
                                                id="inputGroupSelect01" required>
                                            <option  value={this.state.gCategory}>{this.state.gCategory}</option>
                                            <option  value="Action">Action</option>
                                            <option  value="Sport">Sport</option>
                                            <option  value="Battle Royale">Battle Royale</option>
                                            <option  value="Racing ">Racing </option>
                                            <option  value="Adventure ">Adventure </option>
                                            <option  value="Fighting games">Fighting games</option>

                                        </select>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Age
                                                Range</label>
                                        </div>
                                        <select name="ageRange" className="custom-select" id="inputGroupSelect01"
                                                onChange={this.handleChange} required>
                                            <option value={this.state.ageRange}>{this.state.ageRange}</option>
                                            <option value="child">Child</option>
                                            <option value="teen">Teen</option>
                                            <option value="elder">Elderly</option>
                                            <option value="adult">Adult</option>
                                        </select>
                                    </div>

                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                        </div>
                                        <input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                                    </div>



                                    <hr className="mb-4" />

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <button type="submit"  className="btn btn-primary btn-lg btn-block">Edit Details</button>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <a href="http://localhost:3000/"><button type="button" className="btn btn-danger btn-lg btn-block">Cancel</button></a>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </Container>
            </center>
        )
    }
}
export default withRouter( EditGame);