import { useContext, useEffect, useRef, useState } from "react";
import API from "../../API";
import { ShowContext } from "../../App";
import ViewPDFModal from "../Modal/ViewPDFModal";
import { de } from "../../utils/Helper";

const LatestUpdates = () => {
    const { setShow, setMsg } = useContext(ShowContext);
    const [data, setData] = useState([]);

    const [file, setFile] = useState({
        showModal: false,
        record: "",
    });
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        getLatestUpdates(setData, setShow, setMsg);
    }, []);
    const handleClose = () => {
        setFile({
            showModal: false,
            record: "",
        });
    };

    const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
        if (marqueeRef.current && isPlaying) {
            marqueeRef.current.stop();
        }
    };

    const handleMouseLeave = () => {
        if (marqueeRef.current && isPlaying) {
            marqueeRef.current.start();
        }
    };

    // Update the play/pause button handlers
    const handlePause = () => {
        setIsPlaying(false);
        if (marqueeRef.current) {
            marqueeRef.current.stop();
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
        if (marqueeRef.current) {
            marqueeRef.current.start();
        }
    };

    return (
        <div>
            <div className="latest-update">
                <div className="wrap container">
                    <div className="ticker">
                        <div className="title">
                            <h5>LATEST UPDATES</h5>
                        </div>
                        <div className="news">
                            <marquee
                                behavior="scroll"
                                direction="left"
                                loop="infinite"
                                scrollamount="2"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={marqueeRef}
                                className="news-content"
                            >
                                {data.map((record, index) => (
                                    <b className="marqueeFont" key={index}>
                                        {record.url.substring(record.url.lastIndexOf(".") + 1) ==
                                            "pdf" ? (
                                            <a
                                                href="#"
                                                aria-disabled="true"
                                                onClick={(e) => {
                                                    setFile({
                                                        showModal: true,
                                                        record: record,
                                                    });
                                                }}
                                            >
                                                {record.heading}
                                            </a>
                                        ) : (
                                            <a href={record.url} target="_blank" rel="noreferrer">
                                                {record.heading}
                                            </a>
                                        )}
                                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                                    </b>
                                ))}
                            </marquee>
                            <div className="d-flex">
                                <button className="btn btn-sm" onClick={handlePause}>
                                    <i className="news-scroll fa fa-pause"></i>
                                </button>
                                <button className="btn btn-sm" onClick={handlePlay}>
                                    <i className="news-scroll fa fa-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {file.record && (
                <ViewPDFModal
                    showModal={file.showModal}
                    handleClose={handleClose}
                    file={file.record.url}
                />
            )}
        </div>
    );
};

async function getLatestUpdates(setData, setShow, setMsg) {
    API.get("latestUpdates")
        .then((res) => {
            if (res.data.status === "success") {
                // console.log(res.data.data);
                setData(JSON.parse(de(res.data.data)));
            }
        })
        .catch((error) => {
            setShow(true);
            setMsg(error.response.data.message);
        });
}

export default LatestUpdates;
