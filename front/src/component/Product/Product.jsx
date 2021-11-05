import React, { useEffect, useState } from "react";
import "./Product.css";

import Axios from "axios";
import {
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
const Product = () => {
  const [product, setPoduct] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      await Axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/product_api/`,
      }).then((res) => {
        setPoduct(res.data?.results);
      
      });
    };
    getProduct();
  }, []);
  
  return (
    <div className="product container mt-5">
      <div className="row">
        {product != null &&
          product?.slice(0,10).map((item, i) =>
            item.trend === true ? (
              <div key={i} className="col-md-3">
                <div className="card py-3">
                  <div
                    className="
                        home__productCardTop
                        d-flex
                        justify-content-end
                        align-items-center
                      "
                  >
                    <span className='iconify'><FontAwesomeIcon icon={faHeart} /></span>
                  </div>
                  <Link to={`/product/${item?.id}`}
                    className="home__productImg my-2 px-3">
                    <img src={item?.image} alt="" />
                  </Link>
                  <div className="home__productDetails px-3">
                    <Link to={`/product/${item?.id}`}>
                      <h5 className="text-dark">{item?.title}</h5>
                    </Link>

                    <div className="home__productRateContext my-3">
                      <div className="fw-bold d-flex align-items-center">
                        <span className="iconify">
                          {" "}
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p>4.8</p>
                      </div>
                      <p className="home__productOrder text-muted">
                        {item?.marcket_price} Orders
                      </p>
                    </div>

                    <div className="home__productPrice">
                      <h5 className="fw-bold">Rs.{item?.marcket_price}</h5>
                      <p className="fw-bold text-danger home__productMarketPrice">
                        Rs. 58000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={i} className="col-md-3">
                <div className="card py-3">
                  <div
                    className="
                home__productCardTop
                d-flex
                justify-content-between
                align-items-center
              "
                  >
                    <p>Trend</p>
                    <span className='iconify'><FontAwesomeIcon icon={faHeart} /></span>
                  </div>
                  <Link to={`/product/${item?.id}`} className="home__productImg my-2 px-3">
                    <img src={item?.image} alt="" />
                  </Link>
                  <div className="home__productDetails px-3">
                    <Link to={`/product/${item?.id}`}>
                      <h5 className="text-dark">Asus Zonphone Go</h5>
                    </Link>

                    <div className="home__productRateContext my-3">
                      <div className="fw-bold d-flex align-items-center">
                        <span className="iconify">

                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p>4.8</p>
                      </div>
                      <p className="home__productOrder text-muted">8562 Orders</p>
                    </div>

                    <div className="home__productPrice">
                      <h5 className="fw-bold">Rs. 50558.00</h5>
                      <p className="fw-bold text-danger home__productMarketPrice">
                        Rs. 58000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Product;
