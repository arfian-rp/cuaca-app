import axios from "axios";
import React, { useEffect, useState } from "react";

function App(props) {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      let { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=surabaya&units=imperial&appid=4ad9126a1f97c33e5930db5297993398");
      setData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="card">
      <center>
        <h3>kota: {data.name}</h3>
        <h4>temp: {data.main.temp}</h4>
        <h4>temp min: {data.main.temp_min}</h4>
        <h4>temp max: {data.main.temp_max}</h4>
      </center>
    </div>
  );
}

export default App;
