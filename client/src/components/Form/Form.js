import styled from "styled-components";
import Button from "../Button";
import Strength from "./Password/Strength";

const Container = styled.div.attrs({
  className: "container text-center justify-content-center align-items-center",
})``;

const Title = styled.h1.attrs({
  className: "mb-2 mt-2",
})``;

const Control = styled.form.attrs({
  className: "form mb-2",
})`
`;

const Row = styled.div.attrs({
  className: " row mb-3",
})`
   ;
`;

const Label = styled.label.attrs({
  className: "col-sm-2 col-form-label",
})``;

const Col = styled.div.attrs({
  className: "col-sm-10",
})``;

const Input = styled.input.attrs({
  className: "form-control",
})``;

const Form = ({ title, user, type, onChange, onSubmit }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Control onSubmit={onSubmit}>
        <Row>
          <Label>Username</Label>
          <Col>
            <Input
              onChange={onChange}
              value={user?.username}
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
          </Col>
        </Row>
        <Row>
          <Label>Email</Label>
          <Col>
            <Input
              onChange={onChange}
              value={user.email}
              type={type}
              name="email"
              placeholder="Enter your email"
              required
            />
          </Col>
        </Row>
        <Row>
          <Label>Password</Label>
          <Col>
            <Input
              onChange={onChange}
              value={user.password}
              type={type}
              name="password"
              placeholder="Enter your password"
              required
            />{" "}
            <Strength password={user.password} />
          </Col>
        </Row>
        <Button text="Submit" type="submit" />
      </Control>
    </Container>
  );
};

export default Form;
