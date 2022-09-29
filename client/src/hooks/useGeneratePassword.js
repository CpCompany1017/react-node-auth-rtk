import { useState } from "react";

const CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const useGeneratePassowrd = () => {
  const [generatedPassowrd, setPassword] = useState("");

  const generatePassowrd = () => {
    let pass = "";
    for (let i = 0; i < 18; i++) {
      pass += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    setPassword(pass);
  };

  return [generatedPassowrd, generatePassowrd];
};
