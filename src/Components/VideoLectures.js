const VideoLinks = [
  "https://www.youtube.com/embed/wtLZ_bXrNGk",
  "https://www.youtube.com/embed/48vW0rzXCwI",
  "https://www.youtube.com/embed/9KlMn4f_F94",
  "https://www.youtube.com/embed/Ih2I0_SS3zg",
  "https://www.youtube.com/embed/LOzDxsNUunY",
  "https://www.youtube.com/embed/Ug_ulPVq_h8",
  "https://www.youtube.com/embed/i6FNE_iWN9A",
  "https://www.youtube.com/embed/KpXCII3EpAo",
  "https://www.youtube.com/embed/JLMSmsO9Hos",
  "https://www.youtube.com/embed/FH-Ct9QeW4c",
  "https://www.youtube.com/embed/n4s9f6Gw6bg",
];

function VideoLectures() {
  return (
    <div className="card mb-3  borderforcard paddingTopxl">
      <div className="card-header backgroundColorCardHeader">
        <h1 className="fontForHeader">MSBTE Video Lectures</h1>
      </div>
      <div className="row g-0">
        <div className="card-body removePadding">
          <nav class="nav nav-pills align-content-center">
            <h5 class="card-title">Subject : &nbsp;</h5>
            <a class="btn btn-primary btn-sm" href="#" aria-disabled="true">
              Applied Maths
            </a>
          </nav>
          <div className="row mt-3 p-3">
            {VideoLinks.length > 0 &&
              VideoLinks.map((item) => (
                <div className="col-sm-6 p-2">
                  <iframe
                    width="100%"
                    height="315"
                    src={item}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoLectures;
