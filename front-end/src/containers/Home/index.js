import React, { useEffect } from "react";

// router
import { Link } from "react-router-dom";

// bootrap
import { Col, Row } from "react-bootstrap";

// reducers
import { useDispatch, useSelector } from "react-redux";

// actions
import { getAllProducts } from "../../actions";

// components
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Paginate from "../../components/Paginate";
import ProductCarousel from "../../components/ProductCarousel";
import Meta from "../../components/Meta";

function Home(props) {
  const dispatch = useDispatch();

  // product store
  const product = useSelector((state) => state.product);
  const { products, loading, error, page, pages } = product;

  // search
  const keyword = props.match.params.keyword;

  // page pagination
  const pageNumber = props.match.params.pageNumber || 1;

  useEffect(() => {
    dispatch(getAllProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log(products);

  return (
    <Layout>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </Layout>
  );
}

export default Home;
