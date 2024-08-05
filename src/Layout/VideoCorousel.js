import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";

const VideoCorousel = () => {
  const { setShow, setMsg } = useContext(ShowContext);
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos(setVideos, setShow, setMsg);
  }, []);

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner heightCarousal">
          {videos &&
            videos.map((item, index) => {
              return (
                <div
                  className={`carousel-item ${
                    index === 0 && "active"
                  } innerCarousalImg`}
                  key={index}
                >
                  <video autoplay loop muted>
                    <source
                      src="https://msbte.org.in/file/MSBTE_info_video_080720221515.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div>
                    <p className="captionsfonts">{item.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          id="previosbutton"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          id="nextbutton"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

async function getVideos(setVideos, setShow, setMsg) {
  API.get("EventVideos")
    .then((res) => {
      if (res.data.status === "success") {
        setVideos(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

export default VideoCorousel;
