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
  height: 260px;

  margin: 10px 0;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.terciaria};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  padding: 30px 20px 20px;

  animation: ${animate} 0.5s;

  @media (max-width: 1080px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  h2 {
    margin-bottom: 10px;
  }
`;

export const SideRight = styled.main`
  width: 100%;
  flex: 1;
  min-height: 150px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const LegendContainer = styled.ul`
  list-style: none;
  height: 145px;
  padding-right: 15px;
  overflow-y: scroll;

  display: flex;
  align-items: end;
  justify-content: flex-end;
  flex-direction: column;

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

  @media (max-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
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
  @media (max-width: 1080px) {
    margin-top: 20px;
    & + li {
      margin-left: 8px;
    }
    div {
      width: 40px;
      height: 40px;
      font-size: 16px;
      text-align: center;
      line-height: 40px;
    }
  }
`;
