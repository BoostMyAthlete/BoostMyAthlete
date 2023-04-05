import React from "react";
import newest from "../../assets/newest.png"
import following from "../../assets/following.png"
import popular from "../../assets/popular.png"
import perfil from "../../assets/perfil.png"

function DiscussionBoard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          gap: "70px",
          paddingTop: "70px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            background: "#262D34",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          <img src= {newest} alt="newest" width="30" />
          <span style={{ marginLeft: "10px" }}>Newest</span>
        </div>
        <div
          style={{
            textAlign: "center",
            background: "#262D34",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          <img src={popular} alt="popular" width="30" />
          <span style={{ marginLeft: "10px" }}>Popular</span>
        </div>
        <div
          style={{
            textAlign: "center",
            background: "#262D34",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          <img src={following} alt="following" width="30" />
          <span style={{ marginLeft: "10px" }}>Following</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#262D34",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            margin: "10px",
          }}
        >
          <img
            src={perfil}
            alt="perfil"
            style={{ borderRadius: "50%", width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Let's share your interest ..."
            style={{
              border: "none",
              borderRadius: "6px",
              padding: "10px",
              marginLeft: "20px",
              marginRight: "20px",
              width: "300px",
              color: "#ffffff",
              backgroundColor:"#262D34",
            }}
          />
          <button
            style={{
              background: "#FF6934",
              border: "none",
              borderRadius: "6px",
              color: "#ffffff",
              padding: "10px 7px",
            }}
          >
            Create post
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscussionBoard;
