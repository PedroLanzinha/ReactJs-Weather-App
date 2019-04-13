import React from "react";

/*class Weather extends React.Component{
    render(){
        return(
            <div>
                {props.city && props.country && <p>Location:{props.city},{props.country}</p>}
                {props.temperature &&  <p>Temperature:{props.temperature}</p>}
                {props.humidity &&  <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Description:{props.description}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
        );
    }
} */

/*const Weather = (props) => {
    return(
        <div>
            {props.city && props.country && <p>Location:{props.city},{props.country}</p>}
            {props.temperature &&  <p>Temperature:{props.temperature}</p>}
            {props.humidity &&  <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Description:{props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
} */
//method to make this stateless, since these components that do not contain any state don't 
// ^ need to import all these class properties they don't need that many functionalities
// ^ not necessary tough since this is only to make the code more decent so we don't need 
// ^ to import that many stuff in the files

const Weather = props => (
        <div className="weather__info">
            {
                props.city && props.country && <p className="weather__key">Location:
                 <span className="weather__value"> {props.city},{props.country}</span>
                </p>
                }
            {
                props.temperature &&  <p className="weather__key">Temperature:
                 <span className="weather__value"> {props.temperature}</span>
                </p>
                }
            {
                props.humidity &&  <p className="weather__key">Humidity: 
                 <span className="weather__value"> {props.humidity}</span>
                </p>
                }
            {
                props.description && <p className="weather__key">Description:
                 <span className="weather__value"> {props.description}</span>
                </p>
                }
            {
                props.error && <p className="weather__error"> {props.error}</p>
                }
        </div>
    );
    //if you are only returning a single element you can get rid of return
    // and if you are only returning an argument in error function then you can get rid of the parentheses
export default Weather;