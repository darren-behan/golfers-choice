import React, { useContext, useEffect, useState } from 'react';
import "./index.css";
import moment from 'moment';
import DataAreaContext from "../../utils/DataAreaContext";
import API from "../../utils/API";
import { isEmpty } from "lodash";

function WidgetWeather() {
  const { golfClub } = useContext(DataAreaContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  // moment.js current date
  const currentDate = moment().format("dddd, MMMM Do");

  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    getWeather();
  }, [golfClub])

  const getWeather = () => {

    API.retrieveWeather({
      county: golfClub.county
    })
    .then(res => {
        setIsLoaded(true)
        setItems({
          name: res.data.name,
          description: res.data.weather[0].description,
          currentTemperature: Math.floor(res.data.main.temp),
          currentIcon: res.data.weather[0].icon,
          currentHumidity: res.data.main.humidity,
          currentWindSpeed: res.data.wind.speed
        })
      })
      .catch(
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  return (
    <>
    {!isLoaded || isEmpty(items) ? (
      <div></div>
      )
      : (
      <div className="col-sm-12 rounded border affix" data-spy="affix" style={{ padding: 0, margin: "0 0 15px 0" }}>
        <div className="list-group today-ul">
          <div className="list-group-item current title">
            <h2>{ items.name } - { currentDate }</h2>
            <img src={ "https://openweathermap.org/img/w/" + items.currentIcon + ".png" } />
          </div>
          <div className="list-group-item current">
            <span className="rounded description" style={{ backgroundColor: "orange", padding: "0px 5px", textTransform: "capitalize" }}>{ items.description }</span>
          </div>
          <div className="list-group-item current temp">
            Temperature: { items.currentTemperature } &#8451;
          </div>
          <div className="list-group-item current humidity">
            Humidity: { items.currentHumidity }%
          </div>
          <div className="list-group-item current wind">
            Wind Speed: { items.currentWindSpeed } kmph
          </div>
        </div>
      </div>
      )
    }
    </>
  )
}

export default WidgetWeather;