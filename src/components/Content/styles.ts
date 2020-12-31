import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  padding: 30px 60px;

  height: calc(100vh - 80px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    color: ${(props) => props.theme.colors.terciaria};
  }

  @media (max-width: 770px) {
    padding: 30px 20px;
  }
  @media (max-width: 300px) {
    padding: 30px 15px;
  }
`;
