import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Store/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../Store/ActionCreators/BrandActionCreators";
import { Link } from "react-router-dom";

export default function Shop() {
  let [maincategory, setMaincategory] = useState([]);
  let [subcategory, setSubcategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [product, setProduct] = useState([]);
  let [mc, setMc] = useState("All");
  let [sc, setSc] = useState("All");
  let [br, setBr] = useState("All");
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(1000);
  let [search, setSearch] = useState("");
  let [flag, setFlag] = useState(true);

  let dispatch = useDispatch();
  let MainCategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let SubCategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);
  let ProductStateData = useSelector((state) => state.ProductStateData);

  function categoryFilter(mc, sc, br, min = -1, max = -1) {
    setMc(mc);
    setSc(sc);
    setBr(br);
    let data = [];
    if (mc === "All" && sc === "All" && br === "All")
      data = ProductStateData.slice(1).reverse();
    else if (mc !== "All" && sc === "All" && br === "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.maincategory === mc);
    else if (mc === "All" && sc !== "All" && br === "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.subcategory === sc);
    else if (mc === "All" && sc === "All" && br !== "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.brand === br);
    else if (mc !== "All" && sc !== "All" && br === "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.maincategory === mc && x.subcategory === sc);
    else if (mc !== "All" && sc === "All" && br !== "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.maincategory === mc && x.brand === br);
    else if (mc === "All" && sc !== "All" && br !== "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.brand === br && x.subcategory === sc);
    else
      data = ProductStateData.slice(1)
        .reverse()
        .filter(
          (x) => x.maincategory === mc && x.subcategory === sc && x.brand === br
        );
    if (min === -1 && max === -1) setProduct(data);
    else
      setProduct(
        data.filter((x) => x.finalprice >= min && x.finalprice <= max)
      );
  }

  function getPrice(e) {
    var { name, value } = e.target;
    if (name === "min") setMin(value);
    else setMax(value);
  }
  function priceFilter(e) {
    e.preventDefault();
    categoryFilter(mc, sc, br, min, max);
  }
  function getSearch(e) {
    let { value } = e.target;
    if (value === "1") setProduct(product.sort((x, y) => y.id - x.id));
    else if (value === "2")
      setProduct(product.sort((x, y) => y.finalprice - x.finalprice));
    else setProduct(product.sort((x, y) => x.finalprice - y.finalprice));
    flag ? setFlag(false) : setFlag(true);
  }
  function postSearch(e) {
    e.preventDefault();
    setProduct(
      ProductStateData.slice(1)
        .reverse()
        .filter(
          (x) =>
            x.name.toLowerCase().includes(search) ||
            x.maincategory.toLowerCase() === search ||
            x.subcategory.toLowerCase() === search ||
            x.brand.toLowerCase() === search ||
            x.color.toLowerCase() === search ||
            x.size.toLowerCase() === search ||
            x.maincategory.toLowerCase().includes(search)
        )
    );
  }

  function getAPIData() {
    dispatch(getMaincategory());
    if (MainCategoryStateData.length)
      setMaincategory(MainCategoryStateData.slice(1).reverse());
    dispatch(getSubcategory());
    if (SubCategoryStateData.length)
      setSubcategory(SubCategoryStateData.slice(1).reverse());
    dispatch(getBrand());
    if (BrandStateData.length) setBrand(BrandStateData.slice(1).reverse());
    dispatch(getProduct());
    if (ProductStateData.length)
      setProduct(ProductStateData.slice(1).reverse());
  }
  useEffect(() => {
    getAPIData();
  }, [
    MainCategoryStateData.length,
    SubCategoryStateData.length,
    BrandStateData.length,
    ProductStateData.length,
  ]);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-2">
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action bg-primary text-light w-100 text-center p-2"
              >
                MainCategory
              </a>
              <button
                className="list-group-item list-group-item-action text-center"
                onClick={() => {
                  categoryFilter("All", sc, br);
                }}
              >
                All
              </button>
              {maincategory.map((item, index) => {
                return (
                  <button
                    className="list-group-item list-group-item-action text-center"
                    key={index}
                    onClick={() => {
                      categoryFilter(item.name, sc, br);
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action bg-primary text-light w-100 text-center p-2"
              >
                SubCategory
              </a>
              <button
                className="list-group-item list-group-item-action text-center"
                onClick={() => {
                  categoryFilter(mc, "All", br);
                }}
              >
                All
              </button>
              {subcategory.map((item, index) => {
                return (
                  <button
                    className="list-group-item list-group-item-action text-center"
                    key={index}
                    onClick={() => {
                      categoryFilter(mc, item.name, br);
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action bg-primary text-light w-100 text-center p-2"
              >
                Brand
              </a>
              <button
                className="list-group-item list-group-item-action text-center"
                onClick={() => {
                  categoryFilter(mc, sc, "All");
                }}
              >
                All
              </button>
              {brand.map((item, index) => {
                return (
                  <button
                    className="list-group-item list-group-item-action text-center"
                    key={index}
                    onClick={() => {
                      categoryFilter(mc, sc, item.name);
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <h6 className="text-center text-light bg-primary p-2 my-3">
              Price Filter
            </h6>
            <div className="row">
              <form className="form-control">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label>Min</label>
                    <input
                      type="number"
                      className="form-control"
                      name="min"
                      value={min}
                      onChange={getPrice}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Max</label>
                    <input
                      type="number"
                      className="form-control"
                      name="max"
                      value={max}
                      onChange={getPrice}
                    />
                  </div>
                </div>

                <div className="row my-3">
                  <button
                    className="form-control w-100 bg-primary text-light text-center"
                    type="submit"
                    onClick={priceFilter}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-10">
            {/* <!-- Products --> */}

            <div className="row">
              <div className="col-md-9 ">
                <form className="form-control btn-group" onSubmit={postSearch}>
                  <input
                    type="search"
                    className=" form-control"
                    placeholder="Enter MainCategory,SubCategory,Brand,Color,Size etc. to search"
                    name="search"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />

                  <button type="submit" className=" form-control btn">
                    Search
                  </button>
                </form>
              </div>

              <div className="col-md-3 mb-3">
                <select
                  name="sortFilter"
                  onChange={getSearch}
                  className="form-control"
                >
                  <option value="1">Latest</option>
                  <option value="2">Price: H to L</option>
                  <option value="3">Price: L to H</option>
                </select>
              </div>
            </div>

            <div className="row g-4 mt-2">
              {product.map((item, index) => {
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
                          <a className="text-body" href="">
                            <i className="fa fa-shopping-bag text-primary me-2"></i>
                            Add to cart
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <!-- Products End --> */}
      </div>
    </>
  );
}
