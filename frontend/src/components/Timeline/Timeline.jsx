import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "@components/Timeline/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faPersonCirclePlus,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

function StepByStepCards() {
  return (
    <VerticalTimeline
      animate="true"
      lineColor="linear-gradient(45deg, hsla(168, 85%, 52%, 0.5), hsla(263, 88%, 45%, 0.5) 100%)"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Step One"
        contentStyle={{
          background:
            "linear-gradient(45deg, hsla(168, 85%, 52%, 0.5), hsla(263, 88%, 45%, 0.5) 100%)",
          color: "black",
          fontWeight: "700",
          fontFamily: "IBM Plex Mono, sans sherif",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        iconStyle={{
          background:
            "linear-gradient(45deg, hsla(168, 85%, 52%, 1), hsla(263, 88%, 45%, 1) 100%)",
          boxShadow:
            "0 0 0 4px #8a2be2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "80%",
        }}
        icon={<FontAwesomeIcon icon={faPersonCirclePlus} fade />}
      >
        <p>
          We'd like to give you a warm welcome to BoostMyAthlete. Creating a new
          account is quick and easy. Simply select whether you want to sign up
          as a Sponsor or Athlete, and enter all the requested details
          accurately. We recommend that you take your time to ensure that your
          profile is complete and up-to-date. This will help you get the most
          out of our platform. As a Sponsor, you will be able to browse through
          the list of Athletes, and as an Athlete, you will be able to showcase
          your profile and connect with potential Sponsors.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Step Two"
        contentStyle={{
          background:
            "linear-gradient(45deg, hsla(168, 85%, 52%, 0.5), hsla(263, 88%, 45%, 0.5) 100%)",
          color: "black",
          fontWeight: "700",
          fontFamily: "IBM Plex Mono, sans sherif",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        iconStyle={{
          background:
            "linear-gradient(45deg, hsla(168, 85%, 52%, 1), hsla(263, 88%, 45%, 1) 100%)",
          boxShadow:
            "0 0 0 4px #8a2be2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "80%",
        }}
        icon={<FontAwesomeIcon icon={faAddressBook} fade />}
      >
        <p>
          Once you have signed up as an Athlete, you will have direct access to
          the List of Companies where you can browse through the profiles of
          different companies that may be interested in sponsoring you. From
          location to funding budgets and sponsorship goals, all the information
          you need to make informed decisions will be listed there. On the other
          hand, if you are signed up as a Sponsor, you will be able to browse
          through the Athlete's list. Here, you will find detailed information
          about each Athlete, including their bio, location, and awards. Our
          platform makes it easy for you to find the right Athlete to sponsor
          based on your specific needs and interests.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Step Three"
        contentStyle={{
          background:
            "linear-gradient(45deg, hsla(168, 85%, 52%, 0.5), hsla(263, 88%, 45%, 0.5) 100%)",
          color: "black",
          fontWeight: "700",
          fontFamily: "IBM Plex Mono, sans sherif",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        iconStyle={{
          background:
            "linear-gradient(45deg, hsla(168, 85%, 52%, 1), hsla(263, 88%, 45%, 1) 100%)",
          boxShadow:
            "0 0 0 4px #8a2be2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "80%",
        }}
        icon={<FontAwesomeIcon icon={faSquareCheck} fade />}
      >
        <p>
          Congratulations! You are now all set up and ready to start exploring
          our platform. You can use our discussion board to connect with other
          Sponsors and Athletes, exchange ideas, and gain insights into the
          sponsorship industry. Also, keep an eye out for our upcoming meetups
          and events, where you can meet other members of our community in
          person. Our platform is designed to help you make meaningful
          connections and achieve your sponsorship goals. So why wait? Start
          connecting now and take advantage of all the opportunities that our
          platform has to offer!
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default StepByStepCards;
