import { GoEye, GoEyeClosed } from "react-icons/go";

const Eyes = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <GoEyeClosed onClick={setShow} size={18} />
      ) : (
        <GoEye onClick={setShow} size={18} />
      )}
    </>
  );
};

export default Eyes;
