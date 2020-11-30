import React, { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// actions
import { addToCart } from "../../actions/";

// router
import { Link } from "react-router-dom";

// bootstrap
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

// components
import Layout from "../../components/Layout";

function Cart({ match, location, history }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const productId = match.params.id;
  // ?qty=1
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <Layout>
      <h1>Cart</h1>
    </Layout>
  );
}

export default Cart;
