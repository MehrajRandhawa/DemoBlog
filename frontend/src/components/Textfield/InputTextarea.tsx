import { forwardRef } from "react";
import { useState } from "react";
import styled from "styled-components";

interface TextfieldProps {
  placeholder: string;
  heading?: string;
  contextMessage?: string;
  maxLength?: number;
  forwardedRef: React.RefObject<HTMLTextAreaElement>;
  onChange?: () => void
}

const InputTextarea = forwardRef(
  ({
    placeholder,
    heading,
    contextMessage,
    maxLength,
    forwardedRef,
    onChange,
    ...rest
  }: TextfieldProps) => {
    const [count, setCount] = useState(0);

    const contentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const counter: number = event.target.value.length;
      setCount(counter);
    };

    return (
      <SWrapper>
        {heading && <SHeading>{heading}</SHeading>}
        <STextareaWrapper
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={contentChange}
          ref={forwardedRef}
          {...rest}
          onInput={onChange}
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

export default InputTextarea;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SHeading = styled.h1`
  font-size: 14px;
  align-self: flex-start;
`;

const STextareaWrapper = styled.textarea`
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
