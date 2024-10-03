import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
///import Address from "./Components/Address";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import SignUp from "./Components/SignUp";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./Components/AddProduct";
import Orders from "./Components/Orders";
import { useStateValue } from "./StateProvider";
import AdminRoute from "./AdminRoute";
import Address from "./Components/Address";
import 'bootstrap/dist/css/bootstrap.min.css';


const promise = loadStripe("your-stripe-public-key"); // Update with your Stripe public key

// Create a custom PrivateRoute component
const PrivateRoute = ({ children }) => {
  const [{ user }] = useStateValue();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Container>
      <Router>
        <Routes>
        <Route path="/add-product" element={
    <AdminRoute>
      <AddProduct />
    </AdminRoute>
  } />
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          
          {/* Protect AddProduct route */}
          <Route path="/add-product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          
          {/* Private route for checkout */}
          <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
 {/* Private route for checkout */}
 <Route path="/address" element={<PrivateRoute><Address /></PrivateRoute>} />
          {/* Other routes */}
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
          {/* Payment route */}
          <Route path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
