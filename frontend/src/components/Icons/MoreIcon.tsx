import { Property } from "csstype";
import React from "react";

interface IconProps {
  size?: Property.Height;
  fill?: Property.Color;
  title?: string;
}

const MoreIcon: React.FunctionComponent<IconProps> = ({
  size,
  fill,
  title,
  ...rest
}) => {
  return (
    <svg
      height="12px"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 384 384"
      enable-background="new 0 0 384 384"
    >
      {title && <title>{title}</title>}
      <g>
        <g>
          <circle cx="192" cy="42.667" r="42.667" fill={fill} />
        </g>
      </g>
      <g>
        <g>
          <circle cx="192" cy="192" r="42.667" fill={fill} />
        </g>
      </g>
      <g>
        <g>
          <circle cx="192" cy="341.333" r="42.667" fill={fill} />
        </g>
      </g>
    </svg>
  );
};

MoreIcon.defaultProps = {
  size: "12",
  fill: "#010002",
};

export default MoreIcon;