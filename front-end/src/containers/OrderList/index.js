import React, { useEffect } from "react";

// boostrap
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";

// components
import Layout from "../../components/Layout";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

// actions
import { allOrder } from "../../actions/order.actions";

function OrderList(props) {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orderList);
  const { orders: orderList, loading, error } = orders;
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(allOrder());
    } else {
      props.history.push("/login");
    }
  }, [dispatch, props.history, userInfo]);

  return (
    <Layout>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={user._id}>
                <td>{order._id}</td>
                <td>{order.user?.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/order/${order._id}`}>
                    <Button varint="light" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Layout>
  );
}

export default OrderList;
