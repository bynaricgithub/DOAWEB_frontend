import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";
import ImpVideoDiploma from "./ImpVideoDiploma";

function ImportanceOfDiploma() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos(setVideos, setShow, setMsg);
  }, []);

  return (
    <div className="card mb-3  borderforcard paddingAboutMsbte">
      <div className="card-header backgroundColorCardHeader">
        <h1 className="fontForHeader">Importantce of Diploma</h1>
      </div>
      <div className="row g-0">
        <div className="card-body removePadding">
          <div className="row p-4">
            {videos && videos.length > 0 && (
              <ImpVideoDiploma videoList={videos.slice(0, 6)} />
            )}
          </div>
        </div>
      </div>
    </div>
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
export default ImportanceOfDiploma;
