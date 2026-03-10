const Hero = () => {
  const userEmail = localStorage.getItem("email" || "");
  return (
    <div className="hero-section py-5">
      <div className="container px-0 px-lg-2">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <p className="hero-subtitle">Are you ready to Learn? {userEmail}</p>

            <h1 className="hero-title">
              <span className="hero-span-1">Learn With fun</span>
              <br />
              <span className="hero-span-2">on</span>{" "}
              <span className="hero-span-3">any schedule</span>
            </h1>

            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur
              <span className="d-none d-md-inline">
                <br />
              </span>
              adipiscing elit. Varius blandit facilisis quam netus.
            </p>

            <button className="btn btn-success header-btn hero-btn">
              Get Started
            </button>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 text-center">
            <img
              src="/Hero-img.svg"
              alt="hero"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
