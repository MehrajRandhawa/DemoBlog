import { forwardRef } from "react";
import { useState } from "react";
import styled from "styled-components";

interface TextfieldProps {
  placeholder?: string;
  heading?: string;
  contextMessage?: string;
  maxLength?: number;
  password?: boolean;
  name?: string;
  forwardedRef?: React.RefObject<HTMLInputElement>;
}

const InputTextfield = forwardRef(
  ({
    placeholder = "Add text here",
    heading,
    contextMessage,
    maxLength,
    forwardedRef,
    password = false,
    name,
    ...rest
  }: TextfieldProps) => {
    const [count, setCount] = useState(0);

    const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const counter: number = event.target.value.length;
      setCount(counter);
    };

    return (
      <SWrapper>
        {heading && <SHeading>{heading}</SHeading>}
        <STextfieldWrapper
          type={password ? "password" : "text"}
          maxLength={maxLength}
          placeholder={placeholder}
          ref={forwardedRef}
          onChange={contentChange}
          name={name}
          {...rest}
        />
        <SContextWrapper>
          <SContextMessage>{contextMessage}</SContextMessage>
          {maxLength && (
            <SWordcountWrapper>
              {count}/{maxLength}
            </SWordcountWrapper>
          )}
        </SContextWrapper>
      </SWrapper>
    );
  }
);

export default InputTextfield;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SHeading = styled.h1`
  font-size: 14px;
  align-self: flex-start;
`;

const STextfieldWrapper = styled.input`
  width: 100%;
  resize: none;
`;

const SContextWrapper = styled.span`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  font-size: 10px;
`;

const SContextMessage = styled.div``;

const SWordcountWrapper = styled.div``;
