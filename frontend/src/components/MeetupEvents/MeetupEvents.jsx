import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './MeetupEvents.css';

const MeetupEvents = () => {
  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      <h2 style={{ color: "white", textAlign: "left", paddingTop: "100px", paddingBottom: "50px"}}>Meetups <i className="bi bi-arrow-right"></i></h2>
      <hr />
      <div className="meetups">
        <div className="meetup">
          <div className="meetup-date">
            <div className="dayofmonth">
              26
            </div>
            <div className="month">
              APR
            </div>
          </div>
          <div className="meetup-info">
            <div className="meetup-title">
              Meetup #1
            </div>
            <div className="meetup-location">
              Lisbon, Portugal
            </div>
            <div className="meetup-tags">
              <div className="tag">Remote</div>
              <div className="tag">Part-time</div>
              <div className="tag">Worldwide</div>
            </div>
          </div>
        </div>
        <div className="meetup">
          <div className="meetup-date">
            <div className="dayofmonth">
              27
            </div>
            <div className="month">
              APR
            </div>
          </div>
          <div className="meetup-info">
            <div className="meetup-title">
              Meetup #2
            </div>
            <div className="meetup-location">
              Berlin, Germany
            </div>
            <div className="meetup-tags">
              <div className="tag">In-person</div>
              <div className="tag">Full-time</div>
              <div className="tag">Local</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MeetupEvents;
