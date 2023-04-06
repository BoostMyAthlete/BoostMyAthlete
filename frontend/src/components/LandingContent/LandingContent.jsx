import React, { useState } from "react";
import "./content.css";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, title, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
  
    <div className="container-md justify-content-center">
      <div
        className="card text-white card-has-bg click-col d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="card-img d-none" src={imgUrl} alt={title} />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
            {isHovered && (
              <>
                <small
                  className="card-meta mb-2"
                  style={{ fontSize: "24px", textAlign: "center" }}
                >
                  {category}
                </small>
                <h4 className="card-title mt-0">
                  <a className="text-white">{title}</a>
                </h4>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col text-center mb-5">
            <h1 className="display-2">
              BoostMy<span class="highlight">Athlete</span>
            </h1>
            <h2 className="stroke">Fuel Your Champ</h2>
            <p className="lead">
              The ultimate platform for connecting sponsors with underfunded
              athletes. Our goal is to help athletes from all walks of life
              achieve their dreams by providing them with the financial support
              they need to compete at the highest levels. We understand that
              many athletes struggle to find funding for their sports and often
              have to rely on their own resources to make it to competitions.
              That's why we created BoostMyAthlete, a platform that allows
              athletes to create profiles and connect with sponsors who are
              passionate about their sport. By supporting these athletes,
              sponsors have the opportunity to make a real difference in their
              lives and help them reach their full potential. Join us today and
              become a part of a community that is dedicated to empowering
              athletes and changing lives.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-md-4">
          <Link to="/signin">
         
            <Card
              imgUrl="https://blog.ipleaders.in/wp-content/uploads/2017/05/iPleaders-12.jpg"
              title="Start your journey here if you're looking into boosting an Athlete"
              category="Register as a Sponsor"
            />
          
          </Link>
          </div>
          <div className="col-md-4">
          
          <Link to="/signin">
          
            <Card
              imgUrl="https://img.freepik.com/premium-photo/young-black-man-gray-background_1301-1014.jpg"
              title="Start your journey here if your looking into a Sponsorship"
              category="Register as an Athlete"
            />
           
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;
