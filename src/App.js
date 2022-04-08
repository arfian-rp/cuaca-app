import axios from "axios";
import React, { useEffect, useState } from "react";

function App(props) {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      let { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=surabaya&units=imperial&appid=4ad9126a1f97c33e5930db5297993398");
      setData(data.main);
    } catch (error) {
      throw error;
    }
  };

  function fToC(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="card">
      <h2>Kota: Surabaya</h2>
      <h3>temp: {fToC(data.temp)} C</h3>
      <h3>temp min: {fToC(data.temp_min)} C</h3>
      <h3>temp max: {fToC(data.temp_max)} C</h3>
      <h3>kelembaban: {data.humidity}</h3>
      <div className="credit">
        <p>
          created by{" "}
          <a target="_blank" href="https://arfian-id.web.app">
            <i>Arfian</i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
