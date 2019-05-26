import React, { Component } from 'react';
import Card from './Card';
export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            error: null, isLoaded: false, items: [], isToggleOn: true
        }
        ;
    }
    handleClick(index, e) {
        let that=this;
        fetch("https://jsonresp.herokuapp.com/datatable/100", {
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
            let newState=that.state.items;
            newState[index]=result.data[index];
            that.setState( {
                items: newState
            }
            );
        }
        );
    }
    componentDidMount() {
        fetch("https://jsonresp.herokuapp.com/datatable/100", {
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
            this.setState( {
                isLoaded: true, items: result.data
            }
            );
        }
        , (error)=> {
            this.setState( {
                isLoaded: true, error
            }
            );
        }
        )
    }
    render() {
        const {
            error,
            isLoaded,
            items
        }
        =this.state;
        if (error) {
            return <div>Error</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
             <div>
             {
               items.map((d,i)=>{
                 return <Card dataItem={d} cnt={i} />
               })
             }</div>
            );
        }
    }
}