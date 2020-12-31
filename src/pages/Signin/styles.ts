import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  h2 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 400px;

  padding: 30px;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.terciaria};
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1px;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 6px;
    border-radius: 2px;

    background-color: ${(props) => props.theme.colors.warning};
    margin-bottom: 75px;
  }
`;
