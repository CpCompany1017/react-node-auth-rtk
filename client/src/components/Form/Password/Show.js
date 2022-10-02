const Show = ({ show, setShow }) => {
  return (
    <span
      style={{
        cursor: "pointer",
        fontSize: "12px",
        marginRight: "5px",
        marginLeft: "5px",
      }}
    >
      {show ? (
        <p onClick={setShow}>hide password</p>
      ) : (
        <p onClick={setShow}>show password</p>
      )}
    </span>
  );
};

export default Show;
