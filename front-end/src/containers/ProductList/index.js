import React, { useEffect } from "react";

// boostrap
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";

// components
import Layout from "../../components/Layout";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

// actions
import { getAllProducts } from "../../actions/product.actions";

function ProductList(props) {
  const dispatch = useDispatch();

  // user logged in
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  // product list
  const productList = useSelector((state) => state.product);
  const { products, loading, error } = productList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllProducts());
    } else {
      props.history.push("/login");
    }
  }, [dispatch, props.history, userInfo]);

  const createProductHandler = () => {};

  const deleteHandler = (userId) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      // delete products dispatch
    }
  };
  return (
    <Layout>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button varint="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Layout>
  );
}

export default ProductList;
