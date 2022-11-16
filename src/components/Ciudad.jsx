import React from "react";
import "./Ciudad.css"

class Ciudad extends React.Component{
    constructor(props){
    super(props)
    console.log(props)
    }
    render(){
        return(
                <div className="box">
                <h2> {this.props.ciudad.name}</h2>
                <div className="detalle">
                <h4>Weather: {this.props.ciudad.weather[0].description}.</h4>
                <h4>Temp Max: {this.props.ciudad.main.temp_max}°</h4>
                <h4>Temp Min: {this.props.ciudad.main.temp_min}°</h4>
                <h4>Feels like: {this.props.ciudad.main.feels_like}°</h4>
                {/* <h3>Prob de lluvia: {this.props.ciudad.rain}°</h3> */}
                <h4>Humidity: {this.props.ciudad.main.humidity}</h4>
                <h4>Wind: {this.props.ciudad.wind.speed}km/h</h4>
                
                </div>
                </div>
        )
} 
};

export default Ciudad;