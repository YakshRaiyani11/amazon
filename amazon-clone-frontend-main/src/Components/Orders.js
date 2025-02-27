// import axios from "../axios";
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Navbar from "./Navbar";
// import { useStateValue } from "../StateProvider";

// function Orders() {
//   const [{ user }] = useStateValue();
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     axios
//       .post("/orders/get", { email: user.email })
//       .then((res) => setOrders(res.data));
//   }, []);
//   console.log(orders);

//   return (
//     <Container>
//       <Navbar />
//       <Main>
//         <OrderContainer>
//           <h2>Your Orders</h2>

//           {orders.map((order) => (
//             <OrderDetail>
//               <AddressComponent>
//                 <h4>Shipping Address</h4>

//                 <div>
//                   <p>{order.address.fullName}</p>
//                   <p>{order.address.flat}</p>
//                   <p>{order.address.area}</p>

//                   <p>
//                     {order.address.city} {order.address.state}
//                   </p>
//                   <p>Phone : {order.address.phone}</p>
//                 </div>
//               </AddressComponent>
//               <OrderBasket>
//                 <h4>Order</h4>
//                 <p>
//                   Subtotal : ₹ <span>{order.price}</span>
//                 </p>

//                 {order.products.map((product) => (
//                   <Product>
//                     <Image>
//                       <img src={product.image} alt="" />
//                     </Image>
//                     <Description>
//                       <h4>{product.title}</h4>

//                       <p>₹ {product.price}</p>
//                     </Description>
//                   </Product>
//                 ))}
//               </OrderBasket>
//             </OrderDetail>
//           ))}
//         </OrderContainer>
//       </Main>
//     </Container>
//   );
// }

// const Container = styled.div`
//   width: 100%;
//   height: fit-content;
//   max-width: 1400px;

//   margin: auto;
//   background-color: rgb(234, 237, 237);
// `;

// const Main = styled.div`
//   min-width: 100vw;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
// `;

// const OrderContainer = styled.div`
//   padding: 15px;

//   background-color: #fff;
//   width: 95%;

//   h2 {
//     font-weight: 500;
//     border-bottom: 1px solid lightgray;
//     padding-bottom: 15px;
//   }
// `;

// const OrderDetail = styled.div`
//   border-bottom: 1px solid lightgray;
//   padding-bottom: 20px;
// `;

// const AddressComponent = styled.div`
//   margin-top: 20px;

//   div {
//     margin-top: 10px;
//     margin-left: 10px;

//     p {
//       font-size: 14px;
//       margin-top: 4px;
//     }
//   }
// `;

// const OrderBasket = styled.div`
//   margin-top: 20px;

//   p {
//     font-size: 15px;
//     margin-left: 15px;
//     margin-top: 15px;

//     span {
//       font-weight: 600;
//     }
//   }
// `;

// const Product = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Image = styled.div`
//   flex: 0.3;
//   img {
//     width: 100%;
//   }
// `;
// const Description = styled.div`
//   flex: 0.7;

//   h4 {
//     font-weight: 600;
//     font-size: 18px;

//     @media only screen and (max-width: 1200px) {
//       font-size: 14px;
//     }
//   }

//   p {
//     font-weight: 600;
//     margin-top: 10px;
//   }

//   button {
//     background-color: transparent;
//     color: #1384b4;
//     border: none;
//     outline: none;
//     margin-top: 10px;
//     cursor: pointer;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;
// export default Orders;

// part2
import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // To redirect user if not logged in

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if user is not available
      return;
    }

    axios
      .post("/orders/get", { email: user.email })
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, [user, navigate]);

  if (!user) {
    return <h2>Loading... Please log in to view your orders.</h2>; // Show a message if user is not logged in
  }

  return (
    <Container>
      <Navbar />
      <Main>
        <OrderContainer>
          <h2>Your Orders</h2>
          {orders.length === 0 ? (
            <p>You have no orders yet.</p>
          ) : (
            orders.map((order) => (
              <OrderDetail key={order._id}>
                <AddressComponent>
                  <h4>Shipping Address</h4>
                  <div>
                    <p>{order.address.fullName}</p>
                    <p>{order.address.flat}</p>
                    <p>{order.address.area}</p>
                    <p>
                      {order.address.city} {order.address.state}
                    </p>
                    <p>Phone : {order.address.phone}</p>
                  </div>
                </AddressComponent>
                <OrderBasket>
                  <h4>Order</h4>
                  <p>
                    Subtotal : ₹ <span>{order.price}</span>
                  </p>
                  {order.products.map((product, index) => (
                    <Product key={index}>
                      <Image>
                        <img src={product.image} alt="" />
                      </Image>
                      <Description>
                        <h4>{product.title}</h4>
                        <p>₹ {product.price}</p>
                      </Description>
                    </Product>
                  ))}
                </OrderBasket>
              </OrderDetail>
            ))
          )}
        </OrderContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const OrderContainer = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 95%;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const OrderDetail = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`;

const AddressComponent = styled.div`
  margin-top: 20px;

  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const OrderBasket = styled.div`
  margin-top: 20px;

  p {
    font-size: 15px;
    margin-left: 15px;
    margin-top: 15px;

    span {
      font-weight: 600;
    }
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;

const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;

    @media only screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Orders;
// import React, { useEffect, useState } from "react";
// import axios from "../axios";
// import { useStateValue } from "../StateProvider";

// function Orders() {
//   const [{ user }] = useStateValue();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (user) {
//       axios
//         .get("/orders/get", {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         })
//         .then((res) => setOrders(res.data.orders))
//         .catch((err) => console.warn(err));
//     }
//   }, [user]);

//   return (
//     <div>
//       <h2>Your Orders</h2>
//       {orders.map((order) => (
//         <div key={order._id}>
//           <h3>Order ID: {order._id}</h3>
//           <p>Total: {order.total}</p>
//           {/* Display products here */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Orders;
