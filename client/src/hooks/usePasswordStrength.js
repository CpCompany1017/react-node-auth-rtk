import { useState, useEffect } from "react";

const STRONG = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const MEDIUM = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

export const usePasswordStrength = (password) => {
  const [strength, setStrength] = useState(0);
  const [strengthColor, setStrengthColor] = useState("red");
  const [strengthText, setStrengthText] = useState("");

  useEffect(() => {
    if (STRONG.test(password)) {
      setStrength(3);
      setStrengthColor("green");
      setStrengthText("Strong");
    } else if (MEDIUM.test(password)) {
      setStrength(2);
      setStrengthColor("orange");
      setStrengthText("Medium");
    } else if (password.length <= 6 && password.length > 0) {
      setStrength(1);
      setStrengthColor("red");
      setStrengthText("Weak");
    } else {
      setStrength(0);
      setStrengthColor("transparent");
      setStrengthText("");
    }
  }, [password]);

  return [strength, strengthColor, strengthText];
};
