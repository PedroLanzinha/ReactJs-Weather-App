import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "80a799e1b248d40619a4d2fad3dca0bc";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
    &appid=${API_KEY}&units=metric`);  
    
    //since react 16 we can use arrow functions instead of a contructor
    //using async awaits, good way of making HTTP calls, and it makes it easier to make web requests 
    // convert to JSON format
    const data = await api_call.json();

    if(city && country){
      //console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description, 
        // ^ this is diferent because in description, one part is returning an object
        // ^ and the other part is returning an array,
        // ^ so we need to select the index of zero and withing the index
        // ^ we need to select the property called description
        error: ""
      });
    }else{
      this.setState({
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the Values."
      });
    }
  
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-2 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;