import { useToggle } from "../../../hooks/useToggle";
import Strength from "./Strength";
import Copy from "./Copy";
import Generate from "./Generate";
import Show from "./Show";

import { MdOutlinePassword } from "react-icons/md";

const Password = ({ password, onChange, type }) => {
  const [showPassword, setShowPassword] = useToggle();

  return (
    <>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">
          <MdOutlinePassword /> Password{" "}
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            onChange={onChange}
            value={password}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            required
          />{" "}
          {type === "register" && (
            <>
              <Strength password={password} />

              <div className="d-flex">
                <Copy password={password} />
                <Show show={showPassword} setShow={setShowPassword} />
                <Generate password={password} onChange={onChange} />
              </div>
            </>
          )}
        </div>
      </div>{" "}
    </>
  );
};

export default Password;
