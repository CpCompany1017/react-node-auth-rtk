import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authActions";
import Form from "../components/Form/Form";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const onChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    dispatch(login(newUser))
      .unwrap()
      .then((user) => {
        toast.success(`Welcome ${user.username}!`);
        navigate("/auth");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  if (isLoading) return <Spinner />;

  return (
    <Form
      formType="login"
      title="Login"
      onChange={onChange}
      onSubmit={onSubmit}
      user={user}
    />
  );
};

export default Login;
