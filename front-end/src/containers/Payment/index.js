import React, { useState } from "react";

// bootstrap
import { Form, Button, Col, FormGroup } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";

// components
import FormContainer from "../../components/UI/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";

// action
import { savePaymentMethod } from "../../actions/cart.actions";

// components
import Layout from "../../components/Layout";

function Payment(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  if (!shippingAddress) {
    props.history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <Layout>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>

            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              {/* <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
            </Col>
          </Form.Group>

          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Layout>
  );
}

export default Payment;
