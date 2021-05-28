import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Email: " + email + "\nPassword: " + password);
    event.preventDefault();
  };

  return (
    <div>
      <form id="form_login" onSubmit={handleSubmit}>
        <h4>Login:</h4>
        <Input
          type="text"
          value={email}
          placeholder="Email"
          onChange={handleChangeEmail}
        />

        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />

        <Button type="submit" />
      </form>
    </div>
  );
}

export default Login;
