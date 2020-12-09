import React, { useState, useEffect } from "react";

// router
import { Link, useHistory } from "react-router-dom";

// bootstrap
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";

// actions
import { getSingleProduct } from "../../actions/";

// components
import Layout from "../../components/Layout";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function Product(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getSingleProduct(props.match.params.id));
  }, [dispatch, props.match]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <Layout>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={process.env.REACT_APP_UPLOAD + product.image}
              alt={product.name}
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ₱{product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₱{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </Layout>
  );
}

export default Product;
