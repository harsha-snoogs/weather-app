import './App.css';
import { useState } from  'react';
import getWeatherDetails from "./Service/service"

function App() {
  const [city,setCity] = useState("Hosur");

  const onTextChange = (e) => {
    console.log("onTextChange", e.target.value);
    setCity(e.target.value);
  }
  const onSubmit = () => {
    console.log("onSubmit", city);
    getWeatherDetails(city);
  }
  
  return (
    <div className="">
      Hello guys, Enter your prefered localtion and get the weather report.
      <input type="text" placeholder="Enter your location" onChange={onTextChange} value={city} />
      <button onClick={onSubmit}>Get details</button>
    </div>
  );
}

export default App;
