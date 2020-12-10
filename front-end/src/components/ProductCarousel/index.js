import React, { useEffect } from "react";

// css
import "./style.css";

// bootstrap
import { Carousel, Image } from "react-bootstrap";
// router
import { Link } from "react-router-dom";
//components
import Loader from "../Loader";
import Message from "../Message";

// redux
import { useDispatch, useSelector } from "react-redux";

//actions
import { getTopProducts } from "../../actions/product.actions";

function ProductCarousel() {
  const dispatch = useDispatch();

  // product top rated
  const topRatedProducts = useSelector((state) => state.productTopRated);
  const { products, loading, error } = topRatedProducts;

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={process.env.REACT_APP_UPLOAD + product.image}
              alt={product.name}
              fluid
            />
            <Carousel.Caption className="carouse-caption">
              <h2>
                {product.name} ({product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
