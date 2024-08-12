function DirectorProfile() {
  return (
    <div className="card mb-3  borderforcard paddingTopxl">
      <div className="card-header backgroundColorCardHeader">
        <h1 className="fontForHeader">Director's Profile</h1>
      </div>
      <div className="row g-0">
        <div className="card-body removePadding p-1">
          <img
            className="img-fluid float-start me-4"
            src="/assets/Images1/director.png"
            alt="Shri. Vinod R. Dandge"
          />
          <h2> Shri. Vinod R. Dandge</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    // <div className="card-body removePadding p-5">
    //   <div className="row g-0">
    //     <div className="card-body">

    //     </div>
    //   </div>
    // </div>
  );
}

export default DirectorProfile;
