import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  transform: translateX(-100px);
  opacity:0;
}

50%{
  opacity:.3;
}

100%{
  transform: translateX(0px);
  opacity:1;
}
`;

export const Container = styled.div`
  position: relative;
  width: 48%;
  height: 240px;
  background-color: ${(props) => props.theme.colors.terciaria};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${animate} 0.5s;

  header {
    h1 {
      display: flex;
      align-items: center;
      font-size: 28px;
      margin-bottom: 8px;
    }
    img {
      width: 35px;
      margin-left: 7px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 770px) {
    width: 100%;
    header {
      h1 {
        font-size: 24px;
        letter-spacing: 0.7px;
      }

      img {
        width: 25px;
      }

      p {
        font-size: 16px;
      }
    }

    footer {
      span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 420px) {
    width: 100%;

    header {
      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;
