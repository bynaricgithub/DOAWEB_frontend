import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";
import { de } from "../utils/Helper";

function ViewInstitutes() {
    const { setShow, setMsg } = useContext(ShowContext);
    const [locations, setLocations] = useState([]);
    function loadScript(url, callback) {
        let script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    useEffect(() => {
        getLocations(setLocations, setShow, setMsg);
        loadScript(
            `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`,
            () => {
                // console.log("Maps Ready!");
            }
        );
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

        let marker, i;
        console.log("L", locations);
        // for (i = 0; i < locations.length; i++) {
        for (i = 0; i < locations.length; i++) {
            marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(
                    locations[i].lat,
                    locations[i].long
                ),
                map: map,
            });

            window.google.maps.event.addListener(
                marker,
                "click",
                (function (marker, i) {
                    return function () {
                        infowindow.setContent(locations[i].inst_id + " - " + locations[i].name + ", City:" + locations[i].city + ", District:" + locations[i].district + ", Region:" + locations[i].region);
                        infowindow.open(map, marker);
                    };
                })(marker, i)
            );
        }
    };
    return (
        <>
            <div id="map" style={{ width: "100%", height: "100vh" }}></div>
        </>
    );
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
                            inst_id: rec.inst_id,
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

export default ViewInstitutes;
