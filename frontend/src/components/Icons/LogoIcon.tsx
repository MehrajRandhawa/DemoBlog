import { Property } from "csstype";
import React from "react";
import colors from "../../utils/colors/colors";
// import colors from "../../../utils/colors/colors";

interface IconProps {
  height?: Property.Height;
  width?: Property.Width;
  fill?: Property.Color;
}

const LogoIcon: React.FunctionComponent<IconProps> = ({
  height,
  width,
  fill,
  ...rest
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      {...rest}
    >
      <g>
        <g>
          <g>
            <path
              fill={fill}
              d="M80.139,103.801H47.715V55.703H30.227V23.282h67.4v32.421H80.139V103.801z M51.715,99.801h24.424V51.703
				h17.488V27.282h-59.4v24.421h17.488V99.801z"
            />
          </g>
          <g>
            <g>
              <rect y="23.279" fill={fill} width="5.362" height="4" />
            </g>
            <g>
              <rect
                x="9.901"
                y="23.279"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
            <g>
              <rect
                x="19.799"
                y="23.279"
                fill={fill}
                width="5.364"
                height="4"
              />
            </g>
          </g>
          <g>
            <g>
              <rect
                x="102.838"
                y="23.279"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
            <g>
              <rect
                x="112.736"
                y="23.279"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
            <g>
              <rect
                x="122.637"
                y="23.279"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
          </g>
          <g>
            <g>
              <rect
                x="76.139"
                y="3.551"
                fill={fill}
                width="4"
                height="5.363"
              />
            </g>
            <g>
              <rect
                x="76.139"
                y="13.452"
                fill={fill}
                width="4"
                height="5.364"
              />
            </g>
          </g>
          <g>
            <g>
              <rect
                x="47.715"
                y="3.551"
                fill={fill}
                width="4"
                height="5.363"
              />
            </g>
            <g>
              <rect
                x="47.715"
                y="13.452"
                fill={fill}
                width="4"
                height="5.364"
              />
            </g>
          </g>
          <g>
            <g>
              <rect
                x="76.139"
                y="109.186"
                fill={fill}
                width="4"
                height="5.365"
              />
            </g>
            <g>
              <rect
                x="76.139"
                y="119.086"
                fill={fill}
                width="4"
                height="5.363"
              />
            </g>
          </g>
          <g>
            <g>
              <rect
                x="47.715"
                y="109.186"
                fill={fill}
                width="4"
                height="5.365"
              />
            </g>
            <g>
              <rect
                x="47.715"
                y="119.086"
                fill={fill}
                width="4"
                height="5.363"
              />
            </g>
          </g>
          <g>
            <g>
              <rect y="51.703" fill={fill} width="5.362" height="4" />
            </g>
            <g>
              <rect
                x="9.901"
                y="51.703"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
            <g>
              <rect
                x="19.799"
                y="51.703"
                fill={fill}
                width="5.364"
                height="4"
              />
            </g>
          </g>
          <g>
            <g>
              <rect
                x="102.838"
                y="51.703"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
            <g>
              <rect
                x="112.736"
                y="51.703"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
            <g>
              <rect
                x="122.637"
                y="51.703"
                fill={fill}
                width="5.363"
                height="4"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;

LogoIcon.defaultProps = {
  height: "128",
  width: "128",
  fill: colors.monochrome.WHITE,
};
