import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/authActions";
import Form from "../components/Form/Form";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = user;

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
      username,
      email,
      password,
    };
    dispatch(register(newUser))
      .unwrap()
      .then((user) => {
        toast.success(`Welcome ${user.username}!`);
        navigate("/auth");
      })
      .catch((err) => {
        console.log(err)
        toast.error(err);
      });
  };

  if (isLoading) return <Spinner />;

  return (
    <Form
      title="Register"
      onChange={onChange}
      onSubmit={onSubmit}
      user={user}
    />
  );
};

export default Register;
