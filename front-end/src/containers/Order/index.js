import React, { useState, useEffect } from "react";

// bootstrap
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";

// router
import { Link } from "react-router-dom";

// component
import Layout from "../../components/Layout";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

// action
import { getOrderDetails, payOrder } from "../../actions/order.actions";

// axios
import initialAxios from "../../helpers/axios";

// paypal
import { PayPalButton } from "react-paypal-button-v2";

// constants
import { orderConstants } from "../../actions/constants";

function Order(props) {
  const dispatch = useDispatch();
  // order reducer
  const order = useSelector((state) => state.order);
  const { orderDetails, loading, error, orderPay } = order;
  const { loadingPay, successPay } = orderPay;

  // user reducer
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const orderId = props.match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  // calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  orderDetails.itemPrice = addDecimals(
    orderDetails.orderItems?.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )
  );

  useEffect(() => {
    if (!userInfo) {
      props.history.push("/login");
    }
  }, [userInfo, props.history]);
  useEffect(() => {
    const addPaPalScript = async () => {
      const { data: clientId } = await initialAxios.get("/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (successPay) {
      dispatch({
        type: orderConstants.ORDER_PAY_RESET,
      });
      dispatch(getOrderDetails(orderId));
    } else if (!orderDetails.isPaid) {
      if (!window.paypal) {
        addPaPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, orderDetails]);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1>Order {orderDetails._id}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name: </strong> {orderDetails.user?.name}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <a href={`mailto:${orderDetails.user?.email}`}>
                      {orderDetails.user?.email}
                    </a>
                  </p>
                  <p>
                    <strong>Address: </strong>
                    {orderDetails.shippingAddress?.address},{" "}
                    {orderDetails.shippingAddress?.city} ,{" "}
                    {orderDetails.shippingAddress?.postalCode},{" "}
                    {orderDetails.shippingAddress?.country}
                  </p>
                  {orderDetails.isDelivered ? (
                    <Message variant="success">
                      Delivered on {orderDetails.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Delivered</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <p>
                    <strong>Method: </strong>
                    {orderDetails.paymentMethod}
                  </p>
                  {orderDetails.isPaid ? (
                    <Message variant="success">
                      Paid on {orderDetails.paidAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {orderDetails.orderItems?.length === 0 ? (
                    <Message>Order is empty</Message>
                  ) : (
                    <ListGroup variant="flush">
                      {orderDetails.orderItems?.map((orderItem, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={orderItem.image}
                                alt={orderItem.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${orderItem.product}`}>
                                {orderItem.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {orderItem.qty} x ${orderItem.price} = $
                              {addDecimals(orderItem.qty * orderItem.price)}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>${orderDetails.itemPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>${orderDetails.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>${orderDetails.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>${orderDetails.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {!orderDetails.isPaid && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                        <PayPalButton
                          amount={orderDetails.totalPrice}
                          onSuccess={successPaymentHandler}
                        />
                      )}
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Layout>
  );
}

export default Order;
