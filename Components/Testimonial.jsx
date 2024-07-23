import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";

import { getTestimonial } from "../Store/ActionCreators/TestimonialActionCreators";
export default function Testimonial() {
  let dispatch = useDispatch();
  let [data, setData] = useState([]);
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);
  function getAPIData() {
    dispatch(getTestimonial());
    if (TestimonialStateData.length) {
      setData(TestimonialStateData.slice(1).reverse());
    }
  }
  useEffect(() => {
    getAPIData();
  }, [TestimonialStateData.length]);

  // testimonial start karne se phle style.css me jaake testimonial wale css pe jake .prev (lineno.473) and .next (lineno.475) type krna hai

  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid bg-light bg-icon py-6 mb-5">
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Customer Review</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div
            className="img-carousel testimonial-img wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              {data.map((item, index) => {
                return (
                  <div
                    className="testimonial-item position-relative bg-white p-5 mt-4"
                    key={index}
                  >
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">{item.message}</p>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 rounded-circle"
                        src={`/img/${item.pic}`}
                        alt=""
                      />
                      <div className="ms-3">
                        <h5 className="mb-1">{item.name}</h5>
                        <span>{item.profile}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}
