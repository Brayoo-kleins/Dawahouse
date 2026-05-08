import React from "react";
import ryn from './images/heungsoon-pills-6127501_1920.jpg';
import revn from './images/padrinan-pill-4897529_1920 (1).jpg';
import anin from './images/alflucio-pills-6605909_1920.jpg';

const Carousel = () => {
  return (
    <div
      id="pharmacyCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#pharmacyCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>

        <button
          type="button"
          data-bs-target="#pharmacyCarousel"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#pharmacyCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src={ryn}
            className="d-block w-100 carousel-image"
            alt="Medicines"
          />
          <div className="carousel-caption">
            <h5>Quality Medicines</h5>
            <p>Get trusted pharmacy products</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={revn}
            className="d-block w-100 carousel-image"
            alt="Delivery"
          />
          <div className="carousel-caption">
            <h5>Fast Delivery</h5>
            <p>We deliver your medicine quickly</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={anin}
            className="d-block w-100 carousel-image"
            alt="Trusted"
          />
          <div className="carousel-caption">
            <h5>Trusted Pharmacy</h5>
            <p>Safe and reliable products</p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#pharmacyCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#pharmacyCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;