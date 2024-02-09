import React, { useState } from "react";
import MicrosoftLogin from "react-microsoft-login";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [error, setError] = useState(null);
  const authHandler = async (error, authData) => {
    if (!error) {
      const data = jwtDecode(authData.accessToken);
      const username = data.name;
      const email = data.upn;
      const rollNumber=data.family_name;
      const response=await axios.post()
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
        authCallback={authHandler}
        buttonTheme="dark"
        className="rounded-md h-10"
      />
    </div>
  );
};

export default Login;
