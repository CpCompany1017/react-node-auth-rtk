import { Routes as Routing, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";

const Routes = () => {
  return (
    <Routing>
      <Route path="/" element={<Navigate to="welcome" />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="auth" element={<PrivateRoute />}>
        <Route path="auth" element={<Navigate to="home" />} />
      </Route>
    </Routing>
  );
};

export default Routes;
