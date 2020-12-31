import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Input;
