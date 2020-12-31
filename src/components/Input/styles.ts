import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  padding: 15px 10px;

  border-radius: 5px;

  & + input {
    margin-top: 20px;
  }
`;
