import React, { useState } from "react";
import "./videoSideBar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import IosShareIcon from "@mui/icons-material/IosShare";

function VideoSideBar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="VideoSideBar">
      <div className="videoSideBar__options" onClick={handdleLike}>
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__options">
        <ChatIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__options">
        <IosShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;

