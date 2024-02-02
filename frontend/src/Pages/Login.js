import React, { useState } from "react";
import MicrosoftLogin from "react-microsoft-login";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(null);

  const authHandler = async (error, authData) => {
    if (!error) {
      try {
        const response = await axios.post("http://localhost:3000", {
          accessToken: authData.accessToken,
        });
        console.log(authData.accessToken);

        console.log("Authentication successful:", response.data);
        // Handle successful authentication, e.g., store user data in state or Redux
      } catch (error) {
        console.error("Error during authentication:", error);
        setError("Error during authentication. Please try again.");
      }
    } else {
      console.error("Microsoft authentication error:", error);
      setError("Microsoft authentication error. Please try again.");
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
