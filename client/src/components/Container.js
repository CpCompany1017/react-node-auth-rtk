import styled from "styled-components";

const Container = styled.div.attrs({
  className: "container text-center d-flex",
})`
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  > h1 {
    margin-bottom: 20px;
  }
  > div {
    padding: 20px;
  }
`;

export default Container;
