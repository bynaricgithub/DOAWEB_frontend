import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";

const EventCorousel = () => {
  const { setShow, setMsg } = useContext(ShowContext);
  const [events, setEvents] = useState();

  useEffect(() => {
    getEvents(setEvents, setShow, setMsg);
  }, []);

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner heightCarousal">
          {events &&
            events.map((eve, index) => {
              return (
                <div
                  className={`carousel-item ${
                    index === 0 && "active"
                  } innerCarousalImg`}
                  key={index}
                >
                  <img
                    src={eve.img_path}
                    className="d-block w-100"
                    alt={eve.name}
                  />
                  <div>
                    <p className="captionsfonts">{eve.description}</p>
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

async function getEvents(setEvents, setShow, setMsg) {
  API.get("events")
    .then((res) => {
      if (res.data.status === "success") {
        setEvents(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

export default EventCorousel;
