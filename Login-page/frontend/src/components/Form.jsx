import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      {/* <input type="password" placeholder="Confirm Password" /> */}
      <Input
      type="text" 
      placeholder="Username"
      />
      <Input
      type="password" 
      placeholder="Password"
      />
      {props.isRegistered === false && <Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
