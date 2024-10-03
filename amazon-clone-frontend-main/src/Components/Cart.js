// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useStateValue } from "../StateProvider";
// import axios from "../axios";

// function Cart() {
//   const [{ basket, user }] = useStateValue();
//   const navigate = useNavigate();

//   const handlePlaceOrder = () => {
//     if (!user) {
//       // If the user is not logged in, redirect to the login page
//       navigate("/login");
//     } else {
//       // If the user is logged in, place the order
//       const orderDetails = {
//         products: basket,
//         total: calculateTotal(basket), // Assuming you have a function to calculate the total price
//         shippingAddress: user.address, // Ensure user has a shipping address saved
//       };

//       axios
//         .post("/orders/place-order", orderDetails, {
//           headers: {
//             Authorization: `Bearer ${user.token}`, // Send the user token for authentication
//           },
//         })
//         .then((res) => {
//           alert(res.data.message); // Show a success message
//           // Clear the basket after placing the order
//           dispatch({ type: "EMPTY_BASKET" });
//           navigate("/orders"); // Navigate to the order page
//         })
//         .catch((err) => console.warn(err));
//     }
//   };

//   return (
//     <div>
//       <h1>Your Shopping Cart</h1>
//       {/* Render products in the cart */}
//       <button onClick={handlePlaceOrder}>Place Order</button>
//     </div>
//   );
// }

// export default Cart;
