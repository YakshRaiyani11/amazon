import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ address, basket, user }, dispatch] = useStateValue();
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderId = async () => {
      const amount = getBasketTotal(basket); // Amount in INR

      const { data } = await axios.post("/payment/create-order", { amount });

      setOrderId(data.id); // Store the Razorpay order ID
      console.log("Order ID is >>>>", data.id);
    };

    fetchOrderId();
  }, [basket]);

  const displayRazorpay = () => {
    if (typeof window.Razorpay === "undefined") {
      console.error("Razorpay SDK not loaded.");
      return;
    }

    const options = {
      key: "rzp_test_m0SpAqXk9qwO99", // Replace with your Razorpay Key ID
      amount: getBasketTotal(basket) * 100, // Amount in paise
      currency: "INR",
      name: "Your Company",
      description: "Test Transaction",
      order_id: orderId, // Razorpay order ID
      handler: function (response) {
        console.log("Payment Successful", response);
        handlePaymentSuccess(response);
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: address?.phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePaymentSuccess = async (paymentResponse) => {
    try {
      await axios.post("/orders/add", {
        basket: basket,
        price: getBasketTotal(basket),
        email: user?.email,
        address: address,
        paymentResponse: paymentResponse, // Store payment response
      });

      dispatch({
        type: "EMPTY_BASKET",
      });
      navigate("/");
    } catch (err) {
      console.error("Error while completing order", err);
    }
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <ReviewContainer>
          <h2>Review Your Order</h2>
          <AddressContainer>
            <h5>Shipping Address</h5>
            <div>
              <p>{address?.fullName}</p>
              <p>{address?.flat}</p>
              <p>{address?.area}</p>
              <p>{address?.city}, {address?.state}</p>
              <p>Phone: {address?.phone}</p>
            </div>
          </AddressContainer>
          <OrderContainer>
            <h5>Your Order</h5>
            <div>
              {basket.map((product) => (
                <Product key={product.id}>
                  <Image>
                    <img src={product.image} alt={product.title} />
                  </Image>
                  <Description>
                    <h4>{product.title}</h4>
                    <p>₹ {product.price}</p>
                  </Description>
                </Product>
              ))}
            </div>
          </OrderContainer>
        </ReviewContainer>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />
          <button onClick={displayRazorpay}>Place Order</button>
        </Subtotal>
      </Main>
    </Container>
  );
}

// Styled Components
// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f3f3;
  padding-bottom: 20px;
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ReviewContainer = styled.div`
  flex: 0.7;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const AddressContainer = styled.div`
  margin-bottom: 20px;

  h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin: 4px 0;
  }
`;

const OrderContainer = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Image = styled.div`
  flex: 0.3;
  img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
`;

const Description = styled.div`
  flex: 0.7;
  padding-left: 20px;

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #b12704; // Amazon's price color
  }
`;

const Subtotal = styled.div`
  flex: 0.3;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    background-color: #f0c14b;
    border-radius: 4px;
    border: 1px solid #a88734;
    color: #111;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ddb347;
    }
  }
`;


export default Payment;
