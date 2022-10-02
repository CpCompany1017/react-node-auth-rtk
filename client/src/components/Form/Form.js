import styled from "styled-components";
import Button from "../Button";
import Password from "./Password/Password";
import { GoHome } from "react-icons/go";
import { MdOutlineEmail, MdOutlineAccountCircle } from "react-icons/md";

const Container = styled.div.attrs({
  className: "container text-center justify-content-center align-items-center",
})``;

const Title = styled.h1.attrs({
  className: "mb-2 mt-2",
})``;

const Control = styled.form.attrs({
  className: "form mb-2",
})``;

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

const Link = styled.a.attrs({
  className: "text-decoration-none",
})`
  color: ${(props) => props.theme.textColor};
`;

const Form = ({ title, user, type, onChange, onSubmit, formType }) => {
  return (
    <Container>
      <Button icon="true" text={<GoHome />} link="/welcome" />
      <Title>{title}</Title>
      <Control onSubmit={onSubmit}>
        {formType === "register" && (
          <Row>
            <Label>
              <MdOutlineAccountCircle />
              Username
            </Label>
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
        )}
        <Row>
          <Label>
            <MdOutlineEmail /> Email
          </Label>
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
        <Password
          password={user.password}
          onChange={onChange}
          type={formType}
        />{" "}
        <Button text="Submit" type="submit" />
      </Control>

      {formType === "register" ? (
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      ) : (
        <p>
          Don't have an account? <Link href="/register">Register</Link>
        </p>
      )}
    </Container>
  );
};

export default Form;
