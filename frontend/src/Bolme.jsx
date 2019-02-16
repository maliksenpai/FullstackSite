import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class Bolme extends Component {
    state={
        top:0,
    }
    handleFormSubmit = (event,requestType) =>{
        event.preventDefault();
        var bir=event.target.elements.bir.value;
        var iki=event.target.elements.iki.value;
        var top=parseInt(bir)/parseInt(iki);
        console.log(bir,iki,top);  
        this.setState({ top: top})    
                axios.post('http://127.0.0.1:8000/api/',{
                    bir:bir,
                    iki:iki,
                    uc:top
                }).then(res => console.log(res))
                .catch(err => console.log(err.message));
        

        }
    render(){
        return(
            <div>
            <form onSubmit={(event) => this.handleFormSubmit(event,'post')} >
                <input type="text" name="bir" />
                <input type="text" name="iki" />
                <input type="submit" name="submit"  value="Bol"/>
            </form>
            <h1> { this.state.top} </h1>
            </div>
        );
    }
}
export default Bolme;