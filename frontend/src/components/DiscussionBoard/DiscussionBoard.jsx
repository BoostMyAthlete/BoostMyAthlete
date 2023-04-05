import React from "react";

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
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <img src="/caminho/do/icone1.png" alt="icone1" />
          <span style={{ marginLeft: "10px" }}>Newest</span>
        </div>
        <div
          style={{
            textAlign: "center",
            background: "#262D34",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <img src="/caminho/do/icone2.png" alt="icone2" />
          <span style={{ marginLeft: "10px" }}>Popular</span>
        </div>
        <div
          style={{
            textAlign: "center",
            background: "#262D34",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <img src="/caminho/do/icone3.png" alt="icone3" />
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
            width: "40px",
            height: "40px",
            marginTop: "20px"
          }}
        >
          <img
            src="/caminho/do/perfil.png"
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
