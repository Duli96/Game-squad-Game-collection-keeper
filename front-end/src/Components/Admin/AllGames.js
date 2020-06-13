import React from "react";
import './CSS/Game.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import  {withRouter} from 'react-router-dom';



class AllGames extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            numOfItems: 0,
            gameList:[],
            totalPrice:0,
            isEmpty:true,
            loading:true,

        }



    }


    callAPI = async  ()=>  {

        this.setState({userId:this.props.users});
        await fetch("http://localhost:4000/game")
            .then(res => res.json())
            .then(json => this.setState({
                gameList:json,
                loading:false,
                isEmpty: false,
                userId:this.props.userInfo

            }));



        if(this.state.myCart == ""){

            await this.setState({isEmpty:true});

        }else {
            await this.setState({
                isEmpty: false
            });
        }


        console.log(this.state.gameList);
    }






    componentWillMount ()  {

        this.callAPI();

    }


     //-----redirect to edit details ----

    editGame = (key)=>{

        this.props.history.push({

            pathname:'/edit',
            state:{
                gameId:key
            }
        });

    }



    //----delete a product from list-------

   deleteProduct = async (key)=>{
console.log(key);

       const listAfterDel = this.state.gameList.filter(item => item._id !== key);

        if( listAfterDel == ""){

            await this.setState(
                {

                    gameList: listAfterDel,
                    isEmpty:true

                }
            );
        }else {
            await this.setState(
                {

                    gameList:  listAfterDel,
                    isEmpty:false

                }
            );

        }

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        };

        const response =  await fetch('http://localhost:4000/game/'+key, requestOptions)

      


    }


    //-----redirect to home------

    gotoHome = () =>{
        console.log("home");
        this.props.history.push('/product');
    }



    render() {


        let list = this.state.gameList;
        if(this.state.loading == true){
            return(
                <center>
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </center>
            );

        }


            return (

               <div>
                   <br/>
                   <br/>
                   <center>
                   <h1>Game Collection</h1>
                   </center>
                   <br/> <br/>
                   {this.state.gameList.map((item) => (
                   <Container className = "list">
                       <Row>
                           <Col sm={4} className = "columnSet"><img src={item.image}
                                                                    className="productimage"/></Col>
                           <Col sm={8} className = "columnset">

                               <span><p className="productName" key={item.key}>{item.gName}</p></span>
                               <span><p className="productColour" key={item.key}>{item.description}</p></span>
                               <span><p className="productSize" key={item.key}>Category:{item.gCategory}</p></span>
                               <span><p className="productSize" key={item.key}>Suitable Age Range:{item.ageRange}</p></span>
                               <div className="remove">
                                   <button className="trashBtn"  onClick={() => this.editGame(item._id)}><img
                                       src={require('../images/edit.png')} className="trashIcon"/></button>
                                   <button className="trashBtn" onClick={() => this.deleteProduct(item._id)}><img
                                       src={require('../images/trash.png')} className="trashIcon"/></button>
                                   <span className="glyphicon glyphicon-edit"></span>
                               </div>
                           </Col>


                       </Row>
                   </Container>

                       ))}
               </div>

            );

        }


}

export default withRouter (AllGames);
