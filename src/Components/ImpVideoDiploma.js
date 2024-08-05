import React, { useState, useRef } from "react";

const ImpVideoDiploma = (props) => {
  const { videoList } = props;
  const players = useRef([]);

  const handlePlay = (index) => {
    players.current.forEach((video, idx) => {
      if (idx !== index && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <>
      {videoList.map((vidObj, index) => (
        <div className="col-sm-6 p-2" key={vidObj.id}>
          <video
            width="100%"
            height="100%"
            controls
            ref={(el) => { players.current[index] = el; }}
            onPlay={() => handlePlay(index)}
            src={vidObj.url}
          ></video>
        </div>
      ))}
    </>
  );
};

export default ImpVideoDiploma;
