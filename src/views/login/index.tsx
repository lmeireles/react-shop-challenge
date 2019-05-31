import React from "react";

import Container from "./containers/container";
import Spinner from "../../components/spinner";

const Login = (props: any) => {
  const { from } = props.location.state || { from: { pathname: "/home" } };

  return <Container />;
};

export default Login;
