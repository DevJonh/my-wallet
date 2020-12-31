import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 15px 10px;

  border-radius: 5px;

  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.warning};

  cursor: pointer;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
