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
import Paginate from "../../components/Paginate";

// constants
import { productDetailsConstants } from "../../actions/constants";

// actions
import {
  getAllProducts,
  deleteProduct,
  createProduct,
} from "../../actions/product.actions";

function ProductList(props) {
  const dispatch = useDispatch();

  // user logged in
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  // product store
  const productList = useSelector((state) => state.product);
  const { products, loading, error, pages, page } = productList;
  // product details store
  const productDetails = useSelector((state) => state.productDetails);
  const {
    success: successCreate,
    product: createdProduct,
    loading: loadingCreate,
    error: errorCreate,
  } = productDetails;

  // paginate
  const pageNumber = props.match.params.pageNumber || 1;

  useEffect(() => {
    dispatch({
      type: productDetailsConstants.CREATE_PRODUCT_RESET,
    });

    if (!userInfo.isAdmin) {
      props.history.push("/login");
    }

    if (successCreate) {
      props.history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(getAllProducts("", pageNumber));
    }
  }, [
    dispatch,
    props.history,
    userInfo,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const deleteHandler = (productId) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deleteProduct(productId));
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
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
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
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </Layout>
  );
}

export default ProductList;
