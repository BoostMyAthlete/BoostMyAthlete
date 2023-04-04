import React from "react";
import DiscussionBoard from "@components/DiscussionBoard/DiscussionBoard";
import MeetupEvents from "@components/MeetupEvents/MeetupEvents";



function CommunityPage() {
  return (
    <div style={{ backgroundColor: "#000000", paddingBottom: "100px" }}>
      <div style={{ backgroundColor: "#ffffff" , textAlign: "center", paddingBottom: "50px" }}>
        “Sports and business may seem like different worlds, but both rely on community building to achieve success”
      </div>
      <DiscussionBoard />
      <MeetupEvents />
    </div>
  );
}

export default CommunityPage;