import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import {
  faStar,
  faHeart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const { id } = useParams();
  const [product, setPoduct] = useState(null);
  const [num, setNum] = useState(0);
  const incr = () => {
    setNum(num + 1)
    };
    const decr = () => {
        setNum(num - 1)
      };
  useEffect(() => {
    const getProduct = async () => {
      await Axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/product_details/${id}`,
      }).then((res) => {
        setPoduct(res?.data);
        GetCategory(res?.data?.category['id'])
        console.log(res?.data +'ffa');
      });
    };

    getProduct();
  
  }, []);
  const GetCategory = async (id) => {
  
    await Axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/category/${id}`,
    }).then((res) => {

      console.log(res.data)
    });

  
}
  return (
    <div>
      <div className="for-border-radius pb-5">
        <section id="product-page">
          <div className="inner-product-page container pt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="slider-title">
                  <h6>{product?.title}</h6>
                  <i className="far fa-heart">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>

                <div className="product-page-slider">
                  <div className="inner-slider">
                    <div className="main-slide-to-show">
                      <img src={product?.image} alt="" />
                      <p>40%</p>
                    </div>
                  </div>
                </div>

                <div className="specification">
                  <div className="specification-title">
                    <h6>SPECIFICATIONS</h6>
                  </div>

                  <div className="under-spe">
                    <div className="sub-for-specification">
                      <p>Origin</p>
                      <p>{product?.origin}</p>
                    </div>
                    <div className="sub-for-specification">
                      <p>Pattern Type</p>
                      <p>{product?.pattern_type}</p>
                    </div>
                    <div className="sub-for-specification">
                      <p>Closure Type</p>
                      <p>{product?.closure_type}</p>
                    </div>
                    <div className="sub-for-specification">
                      <p>Material </p>
                      <p>{product?.material}</p>
                    </div>
                    <div className="sub-for-specification">
                      <p>Style</p>
                      <p>{product?.style}</p>
                    </div>
                    <div className="sub-for-specification">
                      <p>Item Type</p>
                      <p>{product?.item_type}</p>{" "}
                    </div>{" "}
                    <div className="sub-for-specification">
                      <p>Closure Type</p>
                      <p>{product?.closure_type} </p>{" "}
                    </div>{" "}
                    <div className="sub-for-specification">
                      <p>Thickness</p>
                      <p>{product?.thikness}</p>
                    </div>
                    <div className="sub-for-specification">
                      <p>Size</p>
                      <p>{product?.size}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-5">
                <div className="right-section">
                  <div className="stock">
                    <span>1 IN STOCK</span>
                    <p>W78923HD - 327893bs</p>

                    <h6>RS. 12990.00</h6>
                  </div>

                  <div className="sizevarient">
                    <div className="size">
                      <div className="for-size">
                        <span>Size</span>
                      </div>
                      <div className="d-flex">
                        <p>M</p>
                        <p>M</p>
                        <p>M</p>
                      </div>
                    </div>

                    <div className="color">
                      <div className="for-spacing">
                        <p>Color</p>
                      </div>
                      <div className="d-flex">
                        <p className="red"></p>
                        <p className="blue"></p>
                      </div>
                    </div>
                    <div className="quantity">
                      <p>Quantity</p>
                      <form className="inner-number">
                        <div className="value-button" id="decrease">
                                                  <span>
                                                      {
                                                          num == 0 ? (
                                                              <><button className="fas fa-minus" disabled>
                                                              <FontAwesomeIcon icon={faMinus} onClick={decr} />
                                                            </button> </>
                                                          ): (
                                                            <div className="fas fa-minus">
                                                            <FontAwesomeIcon icon={faMinus} onClick={decr} />
                                                          </div>
                                                          )
                                                      }
                           
                          </span>
                        </div>

                        <div className="input">
                          <input type="number" id="number" value={num} />
                        </div>

                        <div className="value-button" id="increase">
                          <span>
                            <div className="fas fa-plus btn">
                              
                                                          <FontAwesomeIcon icon={faPlus} onClick={ incr}/>
                            </div>
                          </span>
                        </div>
                      </form>
                    </div>

                    <div className="button-card-check">
                      <button className="add-to-cart">
                        <i className="fas fa-trash-restore"></i>
                        Add To Cart
                      </button>
                      <button className="add-to-check">Check Out</button>
                    </div>

                    <div className="description">
                      <h6>Description</h6>
                      <p>{product?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="review">
              <p>28525 Reviews</p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>

            <div className="under-review">
              <p>
                Buyers are raving! Multiple people gave 5-star reviews to this
                shop in the past 7 days.
              </p>
              <h6>
                Reviews for this item <span>(123)</span>
              </h6>
            </div>

            <div className="review-section">
              <div className="main-img-profile">
                <div className="reviewer-pix">
                  <img src="img/reviewer.png" alt="" />
                </div>
              </div>
              <div className="reviewwe-details">
                <h6>Michael s.</h6>
                <div className="reviewer-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="main-review">
                  <p>
                    I must say this is a great product at first I thought
                    ceramic coatings were a gimmick but in reality, they act
                    almost as a 2nd clear coat. This product as a first time
                    user I found the instructions to be pretty bad, if you let
                    the product sit as long as the instructions say you will get{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="review-section-with-pix">
              <div className="main-img-profile">
                <div className="reviewer-pix">
                  <img src="img/reviewer.png" alt="" />
                </div>
              </div>
              <div className="reviewwe-details">
                <h6>Michael s.</h6>
                <div className="reviewer-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="main-review">
                  <p>
                    I must say this is a great product at first I thought
                    ceramic coatings were a gimmick but in reality, they act
                    almost as a 2nd clear coat. This product as a first time
                    user I found the instructions to be pretty bad, if you let
                    the product sit as long as the instructions say you will get{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="see-more">
              <button>See More</button>
            </div>

            {/* <div className="recommended-more">
          <p>Recommend For You </p>
        </div>

        <div className="recommend-card">
          <div className="main-card">

            <div className="love-icon">
              <i className="fas fa-bars"></i>
              <i className="far fa-heart heart"></i>
            </div>

            <div className="card-image">
              <img src="img/card-img.png" alt=""/>
              <p>Asus ZenPhone Go</p>
            </div>

            <div className="img-reating">
              <div>
                <i className="fas fa-star"></i>
                <span>4.8</span>
              </div>

              <div>
                <p>8562
                  <span>Orders</span>
                </p>
              </div>
            </div>

            <div className="card-price">
              <p>RS. 50558.00</p>
              <span>Rs.58000.00</span>
            </div>

          </div>

          <div className="main-card">

            <div className="love-icon">
              <i className="fas fa-bars"></i>
              <i className="far fa-heart heart"></i>
            </div>

            <div className="card-image">
              <img src="img/card-img.png" alt=""/>
              <p>Asus ZenPhone Go</p>
            </div>

            <div className="img-reating">
              <div>
                <i className="fas fa-star"></i>
                <span>4.8</span>
              </div>

              <div>
                <p>8562
                  <span>Orders</span>
                </p>
              </div>
            </div>

            <div className="card-price">
              <p>RS. 50558.00</p>
              <span>Rs.58000.00</span>
            </div>

          </div>

          <div className="main-card">

            <div className="love-icon">
              <i className="fas fa-bars"></i>
              <i className="far fa-heart heart"></i>
            </div>

            <div className="card-image">
              <img src="img/card-img.png" alt=""/>
              <p>Asus ZenPhone Go</p>
            </div>

            <div className="img-reating">
              <div>
                <i className="fas fa-star"></i>
                <span>4.8</span>
              </div>

              <div>
                <p>8562
                  <span>Orders</span>
                </p>
              </div>
            </div>

            <div className="card-price">
              <p>RS. 50558.00</p>
              <span>Rs.58000.00</span>
            </div>

          </div>

          <div className="main-card">

            <div className="love-icon">
              <i className="fas fa-bars"></i>
              <i className="far fa-heart heart"></i>
            </div>

            <div className="card-image">
              <img src="img/card-img.png" alt=""/>
              <p>Asus ZenPhone Go</p>
            </div>

            <div className="img-reating">
              <div>
                <i className="fas fa-star"></i>
                <span>4.8</span>
              </div>

              <div>
                <p>8562
                  <span>Orders</span>
                </p>
              </div>
            </div>

            <div className="card-price">
              <p>RS. 50558.00</p>
              <span>Rs.58000.00</span>
            </div>

          </div>

          <div className="main-card">

            <div className="love-icon">
              <i className="fas fa-bars"></i>
              <i className="far fa-heart heart"></i>
            </div>

            <div className="card-image">
              <img src="img/card-img.png" alt=""/>
              <p>Asus ZenPhone Go</p>
            </div>

            <div className="img-reating">
              <div>
                <i className="fas fa-star"></i>
                <span>4.8</span>
              </div>

              <div>
                <p>8562
                  <span>Orders</span>
                </p>
              </div>
            </div>

            <div className="card-price">
              <p>RS. 50558.00</p>
              <span>Rs.58000.00</span>
            </div>

          </div>
        </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
