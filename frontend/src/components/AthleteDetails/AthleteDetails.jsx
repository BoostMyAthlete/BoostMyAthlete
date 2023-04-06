import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AthleteDetails = () => {
  const [athlete, setAthlete] = useState();

  const { id } = useParams();

  const singleAthlete = () => {
    const options = {
      method: "GET",
      url: "https://api.triathlon.org/v1/athletes",
      params: { per_page: "1", athlete_id: id },
      headers: {
        accept: "application/json",
        apikey: "2649776ef9ece4c391003b521cbfce7a",
      },
    };

    axios
      .request(options)
      .then((response) => setAthlete(response.data.data[0]))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    singleAthlete();
  }, []);

  return (
    <div>
      {athlete ? (
        <div>
          <div>
          <img src={athlete.athlete_profile_image} alt={athlete.athlete_last} className="img-thumbnail" style={{ maxWidth: "320px", maxHeight: "400px" }}/>
          </div>
          <h4>{athlete.athlete_first}</h4>
          <h4>{athlete.athlete_last}</h4>
          <p>Country: {athlete.athlete_country_name} <img src={athlete.athlete_flag} alt={athlete.athlete_noc} /> </p>
          <p>Gender: {athlete.athlete_gender}</p>
          <p>Age: {athlete.athlete_age}</p>
        </div>
      ) : null}
    </div>
  );
};

export default AthleteDetails;

