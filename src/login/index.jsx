import react from 'react';
import './style.css';
function login(){
  return (
    <div class="container">
      <div class="left-div">
      <div class="top">
      <h1 class="h1first">Log in to your account</h1>
      <p class="gray">Please log in to use our vendor portal</p>
      </div>
      <div class="input">
      <p>Email:</p>
      <input type="email" name="email" placeholder="John.doe@gmail.com"></input>
      </div>
      <div class="input">
        <p>password:</p>
        <input type="password" id="pwd" name="pwd" placeholder="password"></input>
        </div>
       <div class="input">
      <input type="button" value="save changes" class="btn"></input>
      </div>
     <p class="red">Forgot your password?</p>
     </div>
     <div class="right-div">
      <img src="Group 2.png" id="img"></img>
     </div>
      </div>
  );
}
export default login;