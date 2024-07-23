import React from "react";
import Testimonial from "./Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../Store/ActionCreators/ProductActionCreators";
import { Link } from "react-router-dom";

export default function Home() {
  let dispatch = useDispatch();
  let [data, setData] = useState([]);
  let ProductStateData = useSelector((state) => state.ProductStateData);

  function getAPIData() {
    dispatch(getProduct());
    if (ProductStateData.length) {
      setData(ProductStateData.slice(1).reverse().slice(0, 8));
    }
  }
  useEffect(() => {
    getAPIData();
  }, [ProductStateData.length]);
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                style={{ height: "650px" }}
                src="img/carousel-1.png"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-white mb-5 animated slideInDown">
                        Organic Food Is Good For Health
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                      >
                        Products
                      </a>
                      <a
                        href=""
                        className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                      >
                        Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                style={{ height: "650px" }}
                src="img/carousel-2.png"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 text-white animated slideInDown">
                        Natural Food Is Always Healthy
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                      >
                        Products
                      </a>
                      <a
                        href=""
                        className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                      >
                        Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="img/about.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">
                Best Organic Fruits And Vegetables
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Tempor erat
                elitr rebum at clita
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Clita duo justo
                magna dolore erat amet
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Feature Start --> */}
      <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Our Features</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-1.png" alt="" />
                <h4 className="mb-3">Natural Process</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                <h4 className="mb-3">Organic Products</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                <h4 className="mb-3">Biologically Safe</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End --> */}

      {/* <!-- Product Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="section-header text-start mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <h1 className="display-5 mb-3">Our Products</h1>
                <p>
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed rebum vero dolor duo.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary border-2 active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Vegetable
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary border-2"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    Fruits{" "}
                  </a>
                </li>
                <li className="nav-item me-0">
                  <a
                    className="btn btn-outline-primary border-2"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    Fresh
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {data.map((item, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                      key={index}
                    >
                      <div className="product-item">
                        <div className="position-relative bg-light overflow-hidden">
                          <img
                            className="img-fluid w-100"
                            src={`products/${item.pic1}`}
                            alt=""
                          />
                          <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            New
                          </div>
                        </div>
                        <div className="text-center p-4">
                          <a className="d-block h5 mb-2" href="">
                            {item.name}
                          </a>
                          <span className="text-primary me-1">
                            ₹{item.finalprice}
                          </span>
                          <span className="text-body text-decoration-line-through">
                            ₹{item.baseprice}
                          </span>
                        </div>
                        <div className="d-flex border-top">
                          <small className="w-50 text-center border-end py-2">
                            <Link
                              className="text-body"
                              to={`/singleproduct/${item.id}`}
                            >
                              <i className="fa fa-eye text-primary me-2"></i>
                              View detail
                            </Link>
                          </small>
                          <small className="w-50 text-center py-2">
                            <Link
                              className="text-body"
                              to={`/singleproduct/${item.id}`}
                            >
                              <i className="fa fa-shopping-bag text-primary me-2"></i>
                              Add to cart
                            </Link>
                          </small>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    Browse More Products
                  </a>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-9.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Prashant
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-2.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-3.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-4.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-5.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-6.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-7.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-8.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    Browse More Products
                  </a>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-1.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-2.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-3.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-4.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-5.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-6.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-7.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-8.jpg"
                        alt=""
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Fresh Tomato
                      </a>
                      <span className="text-primary me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">
                        $29.00
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    Browse More Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Product End --> */}

      {/* <!-- Firm Visit Start --> */}
      <div className="container-fluid bg-primary bg-icon mt-5 py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
              <p className="text-white mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet. Diam
                dolor diam ipsum sit. Aliqu diam amet diam et eos.
              </p>
            </div>
            <div
              className="col-md-5 text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <a
                className="btn btn-lg btn-secondary rounded-pill py-3 px-5"
                href=""
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Firm Visit End --> */}

      {/* <!-- Testimonial Start --> */}

      {/* <!-- Testimonial End --> */}
      <Testimonial />
      {/* <!-- Blog Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Latest Blog</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">
                  How to cultivate organic fruits and vegetables in own firm
                </a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3">
                    <i className="fa fa-user text-primary me-2"></i>Admin
                  </small>
                  <small className="me-3">
                    <i className="fa fa-calendar text-primary me-2"></i>01 Jan,
                    2045
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src="img/blog-2.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">
                  How to cultivate organic fruits and vegetables in own firm
                </a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3">
                    <i className="fa fa-user text-primary me-2"></i>Admin
                  </small>
                  <small className="me-3">
                    <i className="fa fa-calendar text-primary me-2"></i>01 Jan,
                    2045
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="img/blog-3.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">
                  How to cultivate organic fruits and vegetables in own firm
                </a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3">
                    <i className="fa fa-user text-primary me-2"></i>Admin
                  </small>
                  <small className="me-3">
                    <i className="fa fa-calendar text-primary me-2"></i>01 Jan,
                    2045
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}
    </>
  );
}
