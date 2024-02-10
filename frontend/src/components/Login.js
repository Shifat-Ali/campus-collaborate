import React, { useContext, useState } from "react";
import MicrosoftLogin from "react-microsoft-login";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../context/AccountProvider.jsx";
const utility1 = async (userData) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:2015/userId",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(userData),
  });
  console.log(response.data[0].id);
};

const utility = async (userData) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:2015/save_user",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(userData),
  });
  // console.log(response);
};

const Login = () => {
  // const {user,setUser}=useContext(AccountContext);
  const [error, setError] = useState(null);
  const authHandler = async (error, authData) => {
    if (!error) {
      const data = jwtDecode(authData.accessToken);
      const username = data.name;
      const email = data.upn;
      const rollNumber = data.family_name;
      const userData = {
        username: username,
        email: email,
        rollNumber: rollNumber,
      };
      const userData2 = { "email": userData.email };
      utility(userData);
      utility1(userData2);
    } else {
      console.log("Error while authentication", error);
      setError(error);
    }
  };
  return (
    <div>
      <h1>Login with Microsoft</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MicrosoftLogin
        clientId="2d562da8-7e3d-4348-9b2e-d2834d7c5afc"
        redirectUri="http://localhost:3000/"
        authCallback={authHandler}
        buttonTheme="dark"
        className="rounded-md h-10"
      />
    </div>
  );
};

export default Login;
