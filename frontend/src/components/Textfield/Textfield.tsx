import styled from "styled-components";

interface Props {
  text: string;
  maxHeight?: string;
  rows?: number;
  cols?: number;
}

const Textfield: React.FunctionComponent<Props> = ({
  text,
  maxHeight,
  rows,
  cols,
  ...rest
}) => {
  return (
    <div>
      <SText maxHeight={maxHeight} {...rest}>
        {text}
      </SText>
    </div>
  );
};

export default Textfield;

const SText = styled.div<{ maxHeight?: string }>`
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};
`;