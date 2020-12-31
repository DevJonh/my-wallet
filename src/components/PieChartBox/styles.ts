import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  transform: translateX(100px);
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

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 240px;

  margin: 10px 0;

  background-color: ${(props) => props.theme.colors.terciaria};
  color: ${(props) => props.theme.colors.white};

  border-radius: 10px;
  display: flex;
  animation: ${animate} 0.5s;

  @media (max-width: 770px) {
    display: flex;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  height: 145px;
  padding-right: 15px;
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
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  div {
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
  span {
    margin-left: 8px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
