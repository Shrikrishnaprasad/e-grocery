import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useGlobalContext } from "../../context";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser, URL } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.userName) {
            alert("Hi " + data.userName + " !! You are logged in ");
            setEmail("");
            setPassword("");
            setUser({
              ...user,
              name: data.userName,
              email: data.email,
              mobile: data.mobile,
            });
            history.push("/");
          } else {
            alert(data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill out all the fields");
    }
  };

  return (
    <>
      <Navbar />
      <div className="Login-Container">
        <div className="Login-Wrapper">
          <h1 className="Login-Title">SIGN IN</h1>
          <form className="Login-Form" onSubmit={handleSubmit}>
            <input
              className="Login-Input"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="Login-Input"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="Login-Button">LOGIN</button>
            <Link
              className="Login-Link"
              onClick={() => history.push("/register")}
            >
              CREATE A NEW ACCOUNT{" "}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
