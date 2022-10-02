import { usePasswordStrength } from "../../../hooks/usePasswordStrength";
import Copy from "./Copy";
import styled from "styled-components";

const Strength = ({ password }) => {
  const [strength, strengthColor, strengthText] = usePasswordStrength(password);

  return (
    <>
      {" "}
      {password.length > 1 && (
        <div
          style={{
            marginTop: "4px",
            width: "100%",
            opacity: "0.5",
            borderRadius: "5px",
            backgroundColor: strengthColor,
          }}
        >
          <p style={{ textAlign: "left", marginLeft: "5px", fontSize: "12px" }}>
            {strengthText}
          </p>
        </div>
      )}
    </>
  );
};

export default Strength;
