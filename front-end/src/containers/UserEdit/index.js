import React, { useState, useEffect } from "react";

// bootstrap
import { Form, Button } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";

// router
import { Link } from "react-router-dom";

// components
import Layout from "../../components/Layout";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/UI/FormContainer";

// constants
import { userConstants } from "../../actions/constants";

// action
import { getUserDetails, updateUserDetails } from "../../actions/user.actions";

function UserEdit(props) {
  const userId = props.match.params.id;
  const dispatch = useDispatch();
  // user details store
  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error, success } = userDetails;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  useEffect(() => {
    if (success) {
      dispatch({ type: userConstants.USER_DETAILS_UPDATE_RESET });
      props.history.push("/admin/userList");
    }
    if (!user?.name || user?._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, userId, user, success, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      isAdmin,
    };
    dispatch(updateUserDetails(user._id, data));
  };
  return (
    <Layout>
      <Link to="/admin/userList" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </Layout>
  );
}

export default UserEdit;
