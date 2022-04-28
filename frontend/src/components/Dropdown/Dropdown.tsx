import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MoreIcon from "../Icons/MoreIcon";

export interface DropdownMenuProps {
  mainLabel: any;
  listLabels: any[];
}

export default function DropdownMenu({
  mainLabel,
  listLabels,
  ...rest
}: DropdownMenuProps) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listStyle = isVisible ? { display: "block" } : { display: "none" };

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current) {
        const hasClickedOutside = !ref.current.contains(
          event.target as HTMLElement
        );
        if (isVisible === true && hasClickedOutside) {
          setVisible(false);
        }
      }
    },
    [isVisible]
  );

  const toggle = useCallback(() => {
    if (isVisible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <DropdownContainer onClick={toggle} ref={ref} {...rest}>
      <DropdownMain>
        <DropdownMainLabel>
          {mainLabel}
          <MoreIcon fill="white" />
        </DropdownMainLabel>
      </DropdownMain>
      <DropdownList style={listStyle}>
        {listLabels.map((label) => (
          <DropdownListElement>{label}</DropdownListElement>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  display: block;
  height: 100%;
  width: 100px;
  cursor: pointer;
  background-color: gray;
`;

const DropdownMain = styled.div`
  display: flex;
  height: 100%;
  padding-left: 2px;
`;

const DropdownMainLabel = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 1px;
`;

const DropdownListElement = styled.li`
  padding: 5px 3px;
  text-decoration: none;
  list-style-type: none;
  border-style: solid;
  border-color: black;
  border-width: 0px 0px 1px 0px;

  &:hover {
    background-color: red;
    color: black;
  }
`;

const DropdownList = styled.ul`
  display: none;
  width: inherit;
  background-color: inherit;
  position: absolute;
  z-index: 1;
  margin-top: 1px;
  padding: 0;
  cursor: pointer;
`;
