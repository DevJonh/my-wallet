import styled from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;
  @media (max-width: 321px) {
    flex-direction: column;

    div > select {
      margin: 15px 8px 0 0;

      select + select {
        margin-left: 15px;
      }
    }
  }
`;
export const TitleContainer = styled.div<ITitleContainerProps>`
  h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 6px;
      background-color: ${(props) => props.lineColor};
      border-radius: 2px;
      margin-top: 2px;
    }
  }

  @media (max-width: 770px) {
    h1 {
      font-size: 24px;
    }
  }
  @media (max-width: 321px) {
    h1 {
      font-size: 20px;
    }
  }
`;
export const Controllers = styled.div`
  display: flex;
`;
