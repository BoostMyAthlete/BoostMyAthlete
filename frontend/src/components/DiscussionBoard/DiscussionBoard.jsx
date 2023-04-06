import React from "react";
import newest from "../../assets/newest.png";
import following from "../../assets/following.png";
import popular from "../../assets/popular.png";
import perfil from "../../assets/perfil.png";
import surf from "../../assets/surf.png";
import tableTennis from "@assets/tableTennis.png";
import MMA from "@assets/MMA.png"
import user1 from "@assets/user1.png";
import user2 from "@assets/user2.png";
import user3 from "@assets/user3.png";
import "./DiscussionBoard.css";

function DiscussionBoard() {
  return (
    <div>
      <div className="discussion-board-menu">
        <div className="menu-item">
          <img src={newest} alt="newest" width="30" />
          <span>Newest</span>
        </div>
        <div className="menu-item">
          <img src={popular} alt="popular" width="30" />
          <span>Popular</span>
        </div>
        <div className="menu-item">
          <img src={following} alt="following" width="30" />
          <span>Following</span>
        </div>
      </div>
      <div className="discussion-board-form">
        <div className="profile-picture">
          <img src={perfil} alt="perfil" />
        </div>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Let's share your interest ..."
            className="post-input"
          />
          <button className="post-button">Create post</button>
        </div>
      </div>
      <div className="post-box">
        <div className="post-box-content">
          <div className="post-image">
            <img src={surf} alt="surf" />
          </div>
          <div className="post-text">Surf WSL News</div>
          <div className="post-stats">
            <span>
              651,324 <span>Views</span>
            </span>
            <span>
              36,6545 <span>Likes</span>
            </span>
            <span>
              56 <span>Comments</span>
            </span>
          </div>
          <div className="profile-picture">
            <img src={user1} alt="user1" />
          </div>
        </div>
      </div>
      <div className="post-box">
        <div className="post-box-content">
          <div className="post-image">
            <img src={tableTennis} alt="tableTennis" />
          </div>
          <div className="post-text">Table Tennis News</div>
          <div className="post-stats">
            <span>
              244,564 <span>Views</span>
            </span>
            <span>
              10,920 <span>Likes</span>
            </span>
            <span>
              184 <span>Comments</span>
            </span>
          </div>
          <div className="profile-picture">
            <img src={user2} alt="user2" />
          </div>
        </div>
      </div>
      <div className="post-box">
        <div className="post-box-content">
          <div className="post-image">
            <img src={MMA} alt="MMA" />
          </div>
          <div className="post-text">MMA News</div>
          <div className="post-stats">
            <span>
              964,258 <span>Views</span>
            </span>
            <span>
              64,755 <span>Likes</span>
            </span>
            <span>
              44 <span>Comments</span>
            </span>
          </div>
          <div className="profile-picture">
            <img src={user3} alt="user3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionBoard;
