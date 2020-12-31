import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  background-color: ${(props) => props.color};
  width: 32%;
  height: 150px;

  margin: 10px 0;

  border-radius: 10px;
  padding: 10px 15px;
  overflow: hidden;

  h1 {
    font-size: 26px;
  }
  img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  small {
    font-size: 12px;
    position: absolute;
    bottom: 15px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 770px) {
    span {
      font-size: 18px;
    }
    h1 span {
      font-size: 18px;
    }
    img {
      height: 105%;
      top: -2px;
      right: -30px;
    }
  }

  @media (max-width: 420px) {
    width: 100%;
    padding: 15px;
    h1 {
      margin-top: 4px;
      span {
        font-size: 22px;
      }
    }
  }
`;
