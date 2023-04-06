import React from "react";
import DiscussionBoard from "@components/DiscussionBoard/DiscussionBoard";
import MeetupEvents from "@components/MeetupEvents/MeetupEvents";
import "./community.css"



function CommunityPage() {
  return (
    <div className="communityContent"style={{ backgroundColor: "#000000", paddingBottom: "100px" }}>
      <div style={{ color:"#fff", textAlign: "center", fontSize: "20px", paddingTop: "50px", paddingBottom: "30px" }}>
        “Sports and business may seem like different worlds, but both rely on community building to achieve success”
      </div>
      <DiscussionBoard />
      <MeetupEvents />
    </div>
  );
}

export default CommunityPage;