import { useCopyPassword } from "../../../hooks/useCopyPassword";

const Copy = ({ password }) => {
  const [copiedPassword, copyToClipboard] = useCopyPassword(password);

  return (
    <>
      {password.length > 1 && (
        <p
          style={{
         
            marginLeft: "80%",
            cursor: "pointer",
            fontSize: "12px",
          }}
          onClick={copyToClipboard}
        >
          copy password
        </p>
      )}
    </>
  );
};

export default Copy;
