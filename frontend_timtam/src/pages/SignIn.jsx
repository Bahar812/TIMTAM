import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://example.com/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-in-outer">
      <div className="sign-in-form-container">
        <form onSubmit={handleSubmit} className="sign-in-form">
          <h2>Login</h2>
          <div className="sign-in-email-input">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="Email..."
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sign-in-password-input">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              placeholder="Password..."
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/">
            <button type="submit">Login</button>
          </Link>
        </form>

        <div className="register-container">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
