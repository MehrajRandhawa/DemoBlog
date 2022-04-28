import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface ButtonProps {
  onPressHandler?(): void;
  icon?: React.ReactNode;
  children: React.ReactNode
}

const Button: FunctionComponent<ButtonProps> = ({
  onPressHandler,
  icon,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer onClick={onPressHandler} {...rest}>
      {icon && <ButtonIconContainer>{icon}</ButtonIconContainer>}
      {children && <ButtonContentContainer>{children}</ButtonContentContainer>}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  display: flex;
  background-color: #fff;
  align-items: center;
  align-content: space-between;
`;

const ButtonIconContainer = styled.span`
  display: flex;
  justify-self: flex-start;
  margin-right: 8px;
`;

const ButtonContentContainer = styled.div`
  text-align: center;
  font-size: 16px;
`;
