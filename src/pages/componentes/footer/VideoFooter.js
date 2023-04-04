import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
function videofooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h4>@{ name }</h4>
        <p>{ description }</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoMusicFooter__text">
           <p>{ music }</p>
          </div>
        </div>
      </div>
      <img
      className="videoFooter__record"
      alt="imagem de um vinil girando"
      src="https://firebasestorage.googleapis.com/v0/b/tik-tok-clone-9b695.appspot.com/o/pngwing.com.png?alt=media&token=5117bbe8-0568-475c-add5-ae38ddabe0c8"
      />
    </div>
  );
}

export default videofooter;
