import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { isDefined } from "../../utils/utils";

interface ButtonProps {
  onPressHandler?(): void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({
  onPressHandler,
  icon,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer onClick={onPressHandler} {...rest}>
      {isDefined(icon) && <ButtonIconContainer>{icon}</ButtonIconContainer>}
      {isDefined(children) && <ButtonContentContainer>{children}</ButtonContentContainer>}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  display: flex;
  background-color: #fff;
  align-items: center;
  align-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

const ButtonIconContainer = styled.span`
  display: flex;
  justify-self: flex-start;
  margin-right: 8px;
`;

const ButtonContentContainer = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;
