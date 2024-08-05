import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";
// import Carousel from "react-multi-carousel";
import EventCorousel from "../Layout/EventCorousel";
import VideoSlider from "./VideoSlider";

function MediaCorner() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos(setVideos, setShow, setMsg);
  }, []);


  return (
    <>
      <div class="row">
        <div className="col-sm-6">
          <div id="im-slider">
            <EventCorousel />
          </div>
        </div>

        {videos && videos.length > 0 && (
          <div className="col-sm-6">
            <div className="row">
              <VideoSlider videoList={videos} />
              {/* <Carousel
                beforeChange={(nextSlide, state) => {
                  console.log("nextSlide: ", nextSlide);
                  console.log("state:", state)
                }}
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                ssr={true} // means to render carousel on server-side.
                slidesToSlide={2}
                swipeable
              >
                {videos.map((item) => (
                  <div>
                    <iframe
                      className="embed-responsive-item w-100 innerCarousalImg"
                      src={item.url}
                      title={item}
                      frameborder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                ))}
              </Carousel> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function getVideos(setList, setShow, setMsg) {
  API.get("EventVideos")
    .then((res) => {
      if (res.data.status === "success") {
        setList(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

export default MediaCorner;
