import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  Title,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter,
} from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";
import logoImg from "../../assets/logo.svg";
import Toggle from "../Toggle";

const Aside: React.FC = () => {
  const { singOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container menuIsOpen={isOpened}>
      <Header>
        <ToggleMenu onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <Link to="/">
          <MdDashboard />
          <span>Dashboard</span>
        </Link>
        <Link to="/list/entry-balance">
          <MdArrowUpward />
          <span>Entradas</span>
        </Link>
        <Link to="/list/exit-balance">
          <MdArrowDownward />
          <span>Saídas</span>
        </Link>
        <MenuItemButton onClick={() => singOut()}>
          {" "}
          <MdExitToApp />
          <span>Sair</span>
        </MenuItemButton>
      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={isOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
