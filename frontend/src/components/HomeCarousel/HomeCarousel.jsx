import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
  const [persons, setPersons] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api.triathlon.org/v1/athletes',
    params: { per_page: '50', validated: 'true' },
    headers: { accept: 'application/json', apikey: '2649776ef9ece4c391003b521cbfce7a' }
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      const totalData = response.data.data;
      const filterImg = totalData.filter((athlete) => athlete.athlete_profile_image !== null);
      setPersons(filterImg);
    });
  }, []);

  return (
    <>
      {persons.length > 0 ? (
        <Carousel fade>
          {persons.map((athlete) => (
            <Carousel.Item key={athlete.athlete_id} className='bg-black border-5'>
              <Link to={`/profile/${athlete.athlete_id}`}>
                <img
                  src={athlete.athlete_profile_image}
                  alt={athlete.athlete_last}
                  style={{ maxWidth: '256px', maxHeight: '320px' }}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default HomeCarousel;
