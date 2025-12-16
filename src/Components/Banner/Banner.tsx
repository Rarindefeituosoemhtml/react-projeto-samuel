import banner1 from "../../assets/img/banner_1_.png";
import banner2 from "../../assets/img/banner_2.png";
import banner3 from "../../assets/img/banner_3_.png";

function Banner() {
  return (
    <section className="banner">
      <div
        id="bannerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="Banner 1" />
          </div>

          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Banner 2" />
          </div>

          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Banner 3" />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
  );
}

export default Banner;
