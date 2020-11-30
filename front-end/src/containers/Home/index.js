import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

// reducers
import { useDispatch, useSelector } from "react-redux";

// actions
import { getAllProducts } from "../../actions";

// components parts
import Layout from "../../components/Layout";

// components
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function Home() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  const { products, loading, error } = product;

  useState(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <Layout>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Layout>
  );
}

export default Home;
