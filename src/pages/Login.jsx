import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <LoginForm
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
};

export default Login;
