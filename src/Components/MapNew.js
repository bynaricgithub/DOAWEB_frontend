import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";
import { de } from "../utils/Helper";

function NewMap() {
    const { setShow, setMsg } = useContext(ShowContext);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations(setLocations, setShow, setMsg);
        loadScript(`https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`, () => {
            // Maps script loaded
        });
    }, []);

    useEffect(() => {
        if (locations.length > 0) {
            setUpMap();
        }
    }, [locations]);

    const setUpMap = () => {
        let map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: new window.google.maps.LatLng(20, 76),
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        });

        let infowindow = new window.google.maps.InfoWindow();

        // Process only the last 4 locations
        const lastFourLocations = locations.slice(-5);

        lastFourLocations.forEach((location, i) => {
            let marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(location.lat, location.long),
                map: map,
            });

            window.google.maps.event.addListener(marker, "click", () => {
                infowindow.setContent(`${location.name}, City: ${location.city}, District: ${location.district}, Region: ${location.region}`);
                infowindow.open(map, marker);
            });
        });
    };

    function loadScript(url, callback) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    return <div id="map" style={{ width: "100%", height: "87vh" }}></div>;
}


function getLocations(setLocations, setShow, setMsg) {
    API.get("map")
        .then((res) => {
            if (res.data.status === "success") {
                let list = [];
                // console.log(res.data.data);
                Promise.all(
                    (JSON.parse(de(res.data.data))).map((rec) => {
                        list.push({
                            name: rec.name,
                            city: rec.iCity,
                            region: rec.region,
                            district: rec.district,
                            taluka: rec.taluka,
                            lat_long: rec.lat_long,
                            lat: parseFloat(rec.lat_long.split(", ")[0]),
                            long: parseFloat(rec.lat_long.split(", ")[1]),
                        });
                    })
                ).then((r) => {
                    // console.log("L1", list);
                    setLocations(list);
                });
            }
        })
        .catch((error) => {
            setShow(true);
            setMsg(error.response.message);
        });
}

export default NewMap;
