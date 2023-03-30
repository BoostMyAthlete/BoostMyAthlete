import React from "react";

const AthleteCard = ({ athlete }) => {
    //   console.log("props from Card:", character);
    
    const {athlete_id, athlete_profile_image, athlete_first, athlete_last, athlete_country_name, athlete_gender, athlete_noc, athlete_flag, athlete_age} = athlete
    
      return (
        athlete ? (
            <div>
              <img src={athlete_profile_image} alt={athlete_last} className="img-thumbnail" style={{ maxWidth: "200px", maxHeight: "200px" }} />
              <div>
                <h5>{athlete_first}</h5>
                <h5>{athlete_last}</h5>
                <p>Country: {athlete_country_name} <img src={athlete_flag} alt={athlete_noc} /></p>
                <p>Gender: {athlete_gender}</p>
                <p>Age: {athlete_age}</p>              
              </div>
          </div>
        ) : null
      );
    };
    
    export default AthleteCard;