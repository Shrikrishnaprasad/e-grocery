import { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { useGlobalContext } from "../../context";
import "./Register.css";

const Register = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({});
  const { URL } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, mobile, email, password, address } = userDetails;
    if (userName && email && password && mobile && address) {
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/user/register`, {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.email) {
            alert("Registration done successfully!");
            history.push("/login");
          } else {
            alert(data.keyValue.email + " this Email is already exists!");
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

      <div className="Register-Container">
        <div className="Register-Wrapper">
          <h1 className="Register-Title">CREATE AN ACCOUNT</h1>
          <form className="Register-Form" onSubmit={handleSubmit}>
            <input
              className="Register-Input"
              placeholder="Name"
              onChange={(e) =>
                setUserDetails({ ...userDetails, userName: e.target.value })
              }
              required
            />
            <input
              className="Register-Input"
              placeholder="Mobile number"
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobile: e.target.value })
              }
              required
            />
            <input
              className="Register-Input"
              placeholder="Email"
              type="email"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              required
            />
            <input
              className="Register-Input"
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              required
            />
            <input
              className="Register-Input"
              placeholder="Address"
              onChange={(e) =>
                setUserDetails({ ...userDetails, address: e.target.value })
              }
              required
            />

            <span className="Register-Agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="Register-Button">CREATE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
