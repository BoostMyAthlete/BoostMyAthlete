import axios from 'axios';
import { useState } from 'react';
import AthleteCard from './../AthleteCard/AthleteCard';

const AthleteList = () => {
    const [persons, setPersons] =useState([]);

    const options = {
      method: 'GET',
      url: 'https://api.triathlon.org/v1/athletes',
      params: {per_page: '150', validated: 'true'},
      headers: {accept: 'application/json', apikey: '2649776ef9ece4c391003b521cbfce7a'}
    };
    const getPersons = () => {
    axios
      .request(options)
      .then((response) => {
        const totalData = response.data.data;
        const filterImg = totalData.filter((athlete) => athlete.athlete_profile_image !== null);
        setPersons(filterImg);
      });
    };
    
    
    // const getPersons = () => {
    // axios
    //   .request(options)
    //   .then((response) => setPersons(response.data.data));
    // };
      return (
            <div>
                <button onClick={getPersons}>Get Athlete List</button>
                <div className="row">          
      {
      persons
        ? persons.map((athlete) => (
            <div key={athlete.athlete_id} className="col-lg-3 col-md-6 col-sm-12">
              <AthleteCard athlete={athlete} />
            </div>
          ))
        : null}

            </div>
            </div>

   )};

export default AthleteList