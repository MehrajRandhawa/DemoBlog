import { Property } from "csstype";
import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";

interface IconProps {
  size?: Property.Height;
  fill?: Property.Color;
  title?: string;
  transform?: string;
}

const SharinganIcon: React.FunctionComponent<IconProps> = ({ size, fill, transform }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="150px"
      height="150px"
      viewBox="0 0 150 150"
      version="1.1"
      transform={transform}
    >
      <defs>
        <radialGradient
          id="radial0"
          gradientUnits="userSpaceOnUse"
          cx="0.5"
          cy="0.5"
          fx="0.5"
          fy="0.5"
          r="0.5"
          gradientTransform="matrix(300,0,0,300,0,0)"
        >
          <stop offset="0" stop-color="rgb(40%,0%,0%)" stopOpacity="1" />
          <stop
            offset="0.5"
            stopColor="rgb(76.470588%,0%,0%)"
            stopOpacity="1"
          />
          <stop offset="1" stopColor="rgb(62.745098%,0%,0%" stopOpacity="1" />
        </radialGradient>
      </defs>
      <g id="surface1">
        <path
          fillRule="nonzero"
          fill="url(#radial0)"
          strokeWidth="10"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          stroke="rgb(0%,0%,0%)"
          strokeOpacity="1"
          strokeMiterlimit="4"
          d="M 295 150 C 295 230.078125 230.078125 295 150 295 C 69.921875 295 5 230.078125 5 150 C 5 69.921875 69.921875 5 150 5 C 230.078125 5 295 69.921875 295 150 Z M 295 150 "
          transform="matrix(0.5,0,0,0.5,0,0)"
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(0%,0%,0%)"
          fillOpacity="1"
          d="M 53.75 75 C 55 50 65 10 75 0 C 85 10 95 50 96.25 75 C 84 75 66 75 53.75 75 Z M 53.75 75 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(0%,0%,0%)"
          fillOpacity="1"
          d="M 125.101562 90.601562 C 130.898438 71 125.199219 23.398438 78.699219 5 C 77.449219 15.851562 80.550781 25.648438 89.398438 33.648438 C 108.300781 38 129.148438 59.300781 122.300781 87.601562 C 112.449219 96.601562 121.148438 101.648438 125.101562 90.601562 Z M 125.101562 90.601562 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(0%,0%,0%)"
          fillOpacity="1"
          d="M 85.625 56.597656 C 106.652344 70.179688 136.292969 98.839844 139.953125 112.5 C 126.292969 116.160156 86.652344 104.820312 64.375 93.402344 C 70.5 82.792969 79.5 67.207031 85.625 56.597656 Z M 85.625 56.597656 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(0%,0%,0%)"
          fillOpacity="1"
          d="M 36.441406 110.585938 C 50.515625 125.410156 94.585938 144.273438 133.773438 113.203125 C 125 106.695312 114.964844 104.480469 103.609375 108.144531 C 90.394531 122.339844 61.523438 129.746094 40.4375 109.664062 C 37.570312 96.632812 28.84375 101.640625 36.441406 110.585938 Z M 36.441406 110.585938 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(0%,0%,0%)"
          fillOpacity="1"
          d="M 85.625 93.402344 C 63.347656 104.820312 23.707031 116.160156 10.046875 112.5 C 13.707031 98.839844 43.347656 70.179688 64.375 56.597656 C 70.5 67.207031 79.5 82.792969 85.625 93.402344 Z M 85.625 93.402344 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(0%,0%,0%)"
          fillOpacity="1"
          d="M 63.460938 23.8125 C 43.585938 28.589844 5.214844 57.324219 12.527344 106.796875 C 22.550781 102.453125 29.488281 94.867188 31.988281 83.203125 C 26.308594 64.660156 34.328125 35.953125 62.261719 27.738281 C 74.980469 31.765625 75.003906 21.707031 63.460938 23.8125 Z M 63.460938 23.8125 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="rgb(62.745098%,0%,0%)"
          fillOpacity="1"
          d="M 89 75 C 89 82.730469 82.730469 89 75 89 C 67.269531 89 61 82.730469 61 75 C 61 67.269531 67.269531 61 75 61 C 82.730469 61 89 67.269531 89 75 Z M 89 75 "
        />
      </g>
    </StyledSVG>
  );
};

SharinganIcon.defaultProps = {
  size: "300",
  fill: colors.monochrome.WHITE,
};

export default SharinganIcon;

const StyledSVG = styled.svg<{transform?: string}>`
  /* position: relative;
  top: -125px;
  left: -300px; */
  transform: ${(props) => props.transform ?? ""};
  transition:  linear;
`;