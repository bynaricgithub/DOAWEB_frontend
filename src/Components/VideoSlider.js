import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoSlider = (props) => {
  const { videoList } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(-1);
  const playerRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    stopCurrentVideo();
  };

  const togglePlayPause = (index) => {
    if (playingIndex === index) {
      // If the clicked video is already playing, pause it
      setPlayingIndex(-1);
      if (playerRef.current) {
        playerRef.current.pause();
      }
    } else {
      // If a different video is clicked, play it
      setPlayingIndex(index);
      if (playerRef.current) {
        playerRef.current.seekTo(0); // Rewind the video to the beginning
        playerRef.current.play();
      }
    }
  };

  const stopCurrentVideo = () => {
    setPlayingIndex(-1);
    if (playerRef.current) {
      playerRef.current.pause();
    }
  };

  return (
    <Carousel
      interval={playingIndex === -1 ? 5000 : null}
      activeIndex={activeIndex}
      onSelect={handleSelect}
      controls={true}
      className="customCarousal"
    >
      {videoList.map((vidObj, index) => (
        <Carousel.Item key={vidObj.id}>
          <ReactPlayer
            ref={playerRef}
            url={vidObj.url}
            pip={true}
            width="100%"
            controls={false} // Hide video controls
            className="react-player"
            playing={playingIndex === index}
            style={{
              margin: "auto",
              objectFit: "cover",
              height: "100%!important",
            }}
            onPlay={() => {
              console.log("Video Play");
            }}
            onPause={() => {
              console.log("Video Pause");
            }}
            onStart={() => console.log("Video Start")}
          />
          <div className="text-center py-3">
            <button
              className="btn btn-dark px-5"
              onClick={() => togglePlayPause(index)}
            >
              <i
                className={`fa fa-${playingIndex === index ? "pause" : "play"}`}
              ></i>
              &nbsp; {playingIndex === index ? "Pause" : "Play"}
            </button>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default VideoSlider;
