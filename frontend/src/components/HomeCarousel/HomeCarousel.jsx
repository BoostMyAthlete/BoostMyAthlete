import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./homecarousel.css";


const HomeCarousel = () => {
  const [persons, setPersons] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api.triathlon.org/v1/athletes',
    params: { per_page: '35', validated: 'true' },
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
   
    
    <div className="carousel-container">
    <h1>Meet our new Athletes</h1>
     
      {persons.length > 0 ? (
        <Carousel fade indicators={false}>
          {persons.map((athlete) => (
            <Carousel.Item key={athlete.athlete_id} id="carousel">
              <Link to={`/profile/${athlete.athlete_id}`} className="nav-link text-white text-decoration-none">
                      <div className="carousel-item-container">
                        <div className="carousel-image-container">
                        <img
                          src={athlete.athlete_profile_image}
                          alt={athlete.athlete_last}
                          className="carousel-image"
                          />{athlete.athlete_first} {athlete.athlete_last}
                </div>
              </div>
              
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
};

export default HomeCarousel;