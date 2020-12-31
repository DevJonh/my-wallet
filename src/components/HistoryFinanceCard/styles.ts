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

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.terciaria};
  position: relative;
  overflow: hidden;
  margin-top: 40px;

  list-style: none;
  border-radius: 5px;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  animation: ${animate} 0.5s;

  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  & + li {
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;

    span {
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 1px;
      margin-bottom: 3px;
    }
  }
`;

export const Tag = styled.div<ITagProps>`
  background-color: ${(props) => props.color};
  height: 60%;
  border-radius: 0 2px 2px 0;

  position: absolute;
  left: -2px;
`;
