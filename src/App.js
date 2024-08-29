import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./API";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export const ShowContext = React.createContext();

function App() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState();

  setupAxios(setShow, setMsg, navigate);
  return (
    <div className="App">
      <ShowContext.Provider value={{ setShow: setShow, setMsg: setMsg }}>
        <Header />
        <Content />
        <Footer />
      </ShowContext.Provider>
    </div>
  );
}

//----------------------Axios Interceptors--------------------------------------
function setupAxios(setShow, setMsg, navigate) {
  API.interceptors.request.use(
    function (config) {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  API.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response;
      if (status !== undefined && status.status === 401) {
        navigate("/");
      } else if (status !== undefined && status.status === 429) {
        setShow(true);
        setMsg(
          "Server is Busy. Please wait for some seconds. Your Response will not be saved till this message keeps appearing."
        );
      } else if (status === undefined || !status) {
        setShow(true);
        setMsg(
          "There is some problem with server response.Your Response will not be saved till this message keeps appearing."
        );
      }
      if (!error.response) {
        setShow(true);
        setMsg(
          "Your Connection to server is lost. Please Contact Internet Service Provider"
        );
      }
      return Promise.reject(error);
    }
  );
}
//----------------------------End of Axios Interceptors-------------------------

export default App;
