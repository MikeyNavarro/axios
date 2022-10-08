import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=fairfield&units=imperial&appid=e42c427fafa99a171fa961c1a25bbc33";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div>
      <p>The Weather in Fairfield is</p>
      {data.main.temp.toFixed(0)} degrees
    </div>
  );
};

export default Weather;
