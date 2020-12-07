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
import { listUser, deleteUser } from "../../actions/user.actions";

function UserLIst(props) {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users, loading, error } = userList;
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUser());
    } else {
      props.history.push("/login");
    }
  }, [dispatch, props.history, userInfo]);

  const deleteHandler = (userId) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deleteUser(userId));
    }
  };
  return (
    <Layout>
      <h1>Users</h1>
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
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button varint="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
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

export default UserLIst;
