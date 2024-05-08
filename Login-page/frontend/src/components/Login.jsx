import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
