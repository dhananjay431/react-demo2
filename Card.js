import React, { Component } from 'react';

export default class Card extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     isLoaded:false,item:{},cnt:""
   };
  //  this.setState({item:this.props.dataItem,cnt:this.props.cnt,isLoaded:true},()=>{
  //    console.log(this.state);
  //  });
  //  console.log("state=>",this.state);

 }
 componentDidMount() {

   this.setState({item:this.props.dataItem,cnt:this.props.cnt,isLoaded:true});
   console.log("componentDidMount=>",this.state);
 }
     handleClick(e) {
        let that=this;
        fetch("https://jsonresp.herokuapp.com/datatable/1", {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }
            , body: JSON.stringify( {
                "city": {
                    "_": "image"
                }
                , "sentences": {
                    "_": "sentences"
                }
                , "product": {
                    "_": "product"
                }
            }
            )
        }
        ) .then(res=> res.json()) .then( (result)=> {

            //let newState=that.state.data;
            console.log("before=>",that.state);
            // that.setState( {
            //     item: result.data[0]
            // }
            // );
            that.props.dataItem = result.data[0];
           
            console.log("after=>",that.state);
        }
        );
    }
 render(){
   return (
     
     <div className="d-flex align-items-stretch col-12 col-sm-6 col-md-4 p-3">
  <div className="card shadow p-3 bg-white rounded">
    {" "}
    <img src={this.props.dataItem.city} className="card-img-top" alt={this.props.dataItem.product} />{" "}
    <div className="card-body">
      {" "}
      <h5 className="card-title"> {this.props.dataItem.product} </h5>{" "}
      <p className="card-text"> {this.props.dataItem.sentences} </p>{" "}
      <a
        href="#"
        className="btn btn-primary"
        onClick={this.handleClick.bind(this)}
      >
        Go somewhere{" "}
      </a>
    </div>{" "}
  </div>{" "}
</div>
);
 }
}