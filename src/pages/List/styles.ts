import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.main``;
export const Filters = styled.div`
  width: 100%;
  margin-top: 60px;

  display: flex;
  justify-content: center;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;

    color: ${(props) => props.theme.colors.white};
    opacity: 0.4;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.7;
    }

    & + .tag-filter {
      margin-left: 20px;
    }

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 6px;
      margin: 5px auto;
      border-radius: 2px;

      background-color: ${(props) => props.theme.colors.sucess};
    }
  }
  .tag-filter-recurrent::after {
    content: "";
    display: block;
    width: 60px;
    height: 6px;
    margin: 5px auto;

    background-color: ${(props) => props.theme.colors.warning};
  }
  .tag-actived {
    opacity: 1;
  }
`;
