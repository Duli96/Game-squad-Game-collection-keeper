import React, { Component } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/Game.css'
export default class AddGameForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            gName :"",
            gCategory:"",
            ageRange:"",
            image:"",
            description:""


        }
    }

    //---save images in cloud storage---
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

    handleSubmit = event => {
        event.preventDefault();
        //---make post request---

        alert('Game saved Succesfully!!')

        axios.post(`http://localhost:4000/game`, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        this.DisplayAll();
    }

    //-----redirect to all games------

    DisplayAll = () =>{
        console.log("home");
        this.props.history.push('/allGames');
    }

    render() {



        return (
            <Container className = "form">
                 <br/><br/>
                 <center>
                <div className="addgameContainer" >
                    <div className="row">
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3"><b>Enter Game Details</b></h4>
                            <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default"> Name</span>
                                    </div>
                                    <input type="text" name="gName" onChange={this.handleChange} className="form-control"
                                           aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Image</span>
                                    </div>
                                    <input type="file" name="file" onChange={this.ImageUpload} className="form-control"  aria-label="Default"
                                           aria-describedby="inputGroup-sizing-default" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text"
                                               htmlFor="inputGroupSelect01">Category</label>
                                    </div>
                                    <select name="gCategory" className="custom-select" onChange={this.handleChange}
                                            id="inputGroupSelect01" required>
                                        <option  value="null">Please Select</option>
                                        <option  value="Action">Action</option>
                                        <option  value="Sport">Sport</option>
                                        <option  value="Battle Royale">Battle Royale</option>
                                        <option  value="Racing ">Racing </option>
                                        <option  value="Adventure ">Adventure </option>
                                        <option  value="Action-adventure">Action-adventure</option>
                                        <option  value="Fighting ">Fighting </option>
                                        <option  value="Strategy">Strategy</option>
                                        <option  value="Sports">Sports</option>

                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Age
                                            Range</label>
                                    </div>
                                    <select name="ageRange" className="custom-select" id="inputGroupSelect01"
                                            onChange={this.handleChange} required>
                                        <option value="null">Choose Range</option>
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
                                    <input type="textarea" name="description" onChange={this.handleChange} className="form-control"
                                           aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                                </div>



                                <hr className="mb-4" />

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <button type="submit"  className="btn btn-primary btn-lg btn-block">Save Game</button>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <a href="http://localhost:3000/"><button type="button"
                                                                                 className="btn btn-danger btn-lg btn-block">Cancel</button></a>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                 </center>
          </Container>

        )
    }
}
