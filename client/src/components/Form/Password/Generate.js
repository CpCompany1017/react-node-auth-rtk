import { useGeneratePassowrd } from "../../../hooks/useGeneratePassword";

const Generate = ({ password, onChange }) => {
  const [generatedPassword, generatePassword] = useGeneratePassowrd();

  const onGeneratePassword = () => {
    generatePassword();
    onChange({ target: { name: "password", value: generatedPassword } });
  };

  return (
    <p
      style={{
        fontSize: "12px",
        cursor: "pointer",
      }}
      onClick={onGeneratePassword}
    >
      generate password
    </p>
  );
};

export default Generate;
