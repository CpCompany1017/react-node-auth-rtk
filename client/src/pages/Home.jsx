import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authActions";
import Container from "../components/Container";
import Button from "../components/Button";
import { BiExit } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    navigate("/welcome");
  };
  return (
    <Container>
      <h1>Only authenticated users can see this page</h1>
      <Button icon="true" text={<BiExit />} link="/welcome" />
      <div>
        <h4 style={{ cursor: "pointer" }} onClick={onLogout}>
          {" "}
          Logout{" "}
        </h4>
      </div>
    </Container>
  );
};

export default Home;
