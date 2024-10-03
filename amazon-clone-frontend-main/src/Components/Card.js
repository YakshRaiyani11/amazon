//Card.js
import React from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";
function Card({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket >>>>", basket);
  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>₹ {price}</p>

        <button onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const Image = styled.div`
  text-align: center;
  margin-bottom: 10px;

  img {
    max-height: 200px;
    object-fit: contain;
    max-width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  h5 {
    font-size: 16px;
    color: #007185;
    margin: 10px 0;
    font-weight: 400;
  }

  p {
    margin: 5px 0;
    font-weight: bold;
    font-size: 18px;
  }

  button {
    margin-top: auto;
    background-color: #f0c14b;
    border: 1px solid #a88734;
    padding: 10px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export default Card;
