import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  transform: translateY(100px);
  opacity:0;
}

50%{
  opacity:.3;
}

100%{
  transform: translateY(0px);
  opacity:1;
}
`;

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.terciaria};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px 30px 15px;
  border-radius: 10px;

  animation: ${animate} 0.5s;
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 0 8px;

  h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  & + li {
    margin-left: 18px;
  }

  div {
    background-color: ${(props) => props.color};
    width: 26px;
    height: 26px;
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
  span {
    margin-left: 4px;
    letter-spacing: 0.3px;
  }
`;
