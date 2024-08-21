import React, { useContext, useEffect, useState } from "react";
import API from "../API";
import { ShowContext } from "../App";

const DignitoryPhotos = () => {
  const { setShow, setMsg } = useContext(ShowContext);
  const [photos, setPhotos] = useState();

  useEffect(() => {
    getDignitoriesPhotos(setPhotos, setShow, setMsg);
  }, []);

  return (
    <>
      <div className="ImagesPoliticians">
        {photos &&
          photos.map((photo, index) => {
            return (
              <div className="mb-3 customewidth" key={index}>
                <div className="card removerborder">
                  <img
                    className="img-fluid"
                    src={photo.img_path}
                    alt={photo.name}
                  />
                </div>
                <span className="names">{photo.name}</span>
                <span className="names1" style={{ textAlign: "center" }}>
                  {photo.post}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

function getDignitoriesPhotos(setPhotos, setShow, setMsg) {
  API.get("photo")
    .then((res) => {
      if (res.data.status === "success") {
        setPhotos(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

export default DignitoryPhotos;
