import { usePasswordStrength } from "../../../hooks/usePasswordStrength";
import styled from "styled-components";

const Strength = ({ password }) => {
  const [strength, strengthColor, strengthText] = usePasswordStrength(password);

  return (
    <div
      style={{
        marginTop: "4px",
        width: "100%",
        height: "23px",
        opacity: "0.5",
        borderRadius: "5px",
        backgroundColor: strengthColor,
      }}
    >
      <p style={{ textAlign: "left", marginLeft: "5px" }}>{strengthText}</p>
    </div>
  );
};

export default Strength;
