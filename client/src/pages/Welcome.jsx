import Container from "../components/Container";
import Button from "../components/Button";
import { GoHome } from "react-icons/go";

const Welcome = () => {
  return (
    <Container>
      <h1>Welcome to simple auth app</h1>
      <Button icon="true" text={<GoHome />} link="/welcome" />
      <h4>
        This is a simple example app that allows you to register and login
      </h4>
      <h4>
        It uses node.js, express, mongodb, react, react-router-dom,
        styled-components and redux-toolkit.
      </h4>
      <div>
        <Button text="Login" link="/login" />
        <Button text="Register" link="/register" />
      </div>
    </Container>
  );
};

export default Welcome;
