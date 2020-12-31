import styled, { css } from "styled-components";

interface IContainerProps {
  menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};

  position: relative;

  @media (max-width: 630px) {
    padding-left: 10px;
    position: fixed;
    z-index: 2;
    width: 180px;

    height: ${(props) => (props.menuIsOpen ? "100vh" : "80px")};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `}
  }
  @media (max-width: 281px) {
    width: 145px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  margin-left: 10px;

  @media (max-width: 630px) {
    display: none;
    visibility: hidden;
  }
`;

export const LogoImg = styled.img`
  width: 38px;
  height: 38px;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  a {
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    align-items: center;

    & + a {
      margin-top: 30px;
    }

    &:hover {
      opacity: 0.7;
    }

    span {
      margin-left: 15px;
    }
    svg {
      font-size: 20px;
    }
  }
`;

export const MenuItemButton = styled.button`
  color: ${(props) => props.theme.colors.info};
  transition: 0.3s;
  display: flex;
  align-items: center;
  margin-top: 30px;
  background: transparent;

  &:hover {
    opacity: 0.7;
  }

  span {
    margin-left: 15px;
    font-size: 16px;
  }
  svg {
    font-size: 20px;
  }
`;

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;

  font-size: 22px;
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 750px) {
    display: none;
  }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  position: absolute;
  bottom: 30px;
  display: ${(props) => (props.menuIsOpen ? "flex" : "none")};

  @media (min-width: 750px) {
    display: none;
  }
`;
