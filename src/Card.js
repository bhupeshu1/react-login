import React from "react";
import './card.css';
import Button from "./Components/Button/Button";
import image from './Components/image/Combined Shape.png'
import Text from "./Components/Text/TextComponent";
function Card({content}) {
  return (
    <div>
      <div class="card-container">

        { content && <><img src={image} id="circleimg" /><div class="top-circle">
          <h1 class="number">168</h1>
          <p class="text">Total orders</p>
        </div><div class="item">
            <div class="sale">
              <p class="text">Item for sale</p>
              <h1 class="number">168</h1>
            </div>
            <div class="sale">
              <p class="text">Item sold</p>
              <h1 class="number">20</h1>y
              {/* <Text text={"Bhupesh"} styles={"Number"} /> */}
            </div>
          </div><p id="bottompara">See inventory</p></>}
        { /* <Button textStyle={"submitButtonText"} buttonStyle={"btn"} buttonText={"Click me"} /> */ }
      </div>



    </div>
  )
}

export default Card;