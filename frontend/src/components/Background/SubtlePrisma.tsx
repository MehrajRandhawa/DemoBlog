import { Property } from "csstype";
import React, { useId } from "react";
//Source: https://www.svgbackgrounds.com/category/abstract/

interface IconProps {
  height?: Property.Height;
  width?: Property.Height;

  prismaHeight?: Property.Height;
  prismaWidth?: Property.Height;

  startFill?: Property.Color;
  stopFill?: Property.Color;

  fill_1?: Property.Color;
  fill_2?: Property.Color;
  fill_3?: Property.Color;
  fill_4?: Property.Color;
  fill_5?: Property.Color;
  fill_6?: Property.Color;
  fill_7?: Property.Color;
}

const SubtlePrisma: React.FunctionComponent<IconProps> = ({
  height,
  width,
  prismaHeight,
  prismaWidth,
  startFill,
  stopFill,
  fill_1,
  fill_2,
  fill_3,
  fill_4,
  fill_5,
  fill_6,
  fill_7,
  ...rest
}) => {
  const firstId = useId();
  const secondId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...rest}
    >
      <rect fill="#ffffff" width={width} />
      <defs>
        <linearGradient
          id={firstId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="0"
          y1="0"
          y2="100%"
          gradientTransform="rotate(186,639,650)"
        >
          <stop offset="0" stopColor={startFill} />
          <stop offset="1" stopColor={stopFill} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          id={secondId}
          width={prismaWidth}
          height={prismaHeight}
          x="0"
          y="0"
          viewBox="0 0 1080 900"
        >
          <g fillOpacity="0.17">
            <polygon fill={fill_1} points="90 150 0 300 180 300" />
            <polygon points="90 150 180 0 0 0" />
            <polygon fill={fill_2} points="270 150 360 0 180 0" />
            <polygon fill={fill_3} points="450 150 360 300 540 300" />
            <polygon fill={fill_4} points="450 150 540 0 360 0" />
            <polygon points="630 150 540 300 720 300" />
            <polygon fill={fill_3} points="630 150 720 0 540 0" />
            <polygon fill={fill_1} points="810 150 720 300 900 300" />
            <polygon fill={fill_5} points="810 150 900 0 720 0" />
            <polygon fill={fill_3} points="990 150 900 300 1080 300" />
            <polygon fill={fill_1} points="990 150 1080 0 900 0" />
            <polygon fill={fill_3} points="90 450 0 600 180 600" />
            <polygon points="90 450 180 300 0 300" />
            <polygon fill={fill_6} points="270 450 180 600 360 600" />
            <polygon fill={fill_2} points="270 450 360 300 180 300" />
            <polygon fill={fill_3} points="450 450 360 600 540 600" />
            <polygon fill={fill_4} points="450 450 540 300 360 300" />
            <polygon fill={fill_4} points="630 450 540 600 720 600" />
            <polygon fill={fill_5} points="630 450 720 300 540 300" />
            <polygon points="810 450 720 600 900 600" />
            <polygon fill={fill_3} points="810 450 900 300 720 300" />
            <polygon fill={fill_2} points="990 450 900 600 1080 600" />
            <polygon fill={fill_1} points="990 450 1080 300 900 300" />
            <polygon fill={fill_7} points="90 750 0 900 180 900" />
            <polygon points="270 750 180 900 360 900" />
            <polygon fill={fill_3} points="270 750 360 600 180 600" />
            <polygon points="450 750 540 600 360 600" />
            <polygon points="630 750 540 900 720 900" />
            <polygon fill={fill_1} points="630 750 720 600 540 600" />
            <polygon fill={fill_2} points="810 750 720 900 900 900" />
            <polygon fill={fill_6} points="810 750 900 600 720 600" />
            <polygon fill={fill_4} points="990 750 900 900 1080 900" />
            <polygon fill={fill_4} points="180 0 90 150 270 150" />
            <polygon fill={fill_1} points="360 0 270 150 450 150" />
            <polygon fill={fill_5} points="540 0 450 150 630 150" />
            <polygon points="900 0 810 150 990 150" />
            <polygon fill={fill_7} points="0 300 -90 450 90 450" />
            <polygon fill={fill_5} points="0 300 90 150 -90 150" />
            <polygon fill={fill_5} points="180 300 90 450 270 450" />
            <polygon fill={fill_6} points="180 300 270 150 90 150" />
            <polygon fill={fill_7} points="360 300 270 450 450 450" />
            <polygon fill={fill_5} points="360 300 450 150 270 150" />
            <polygon fill={fill_1} points="540 300 450 450 630 450" />
            <polygon fill={fill_7} points="540 300 630 150 450 150" />
            <polygon fill={fill_2} points="720 300 630 450 810 450" />
            <polygon fill={fill_6} points="720 300 810 150 630 150" />
            <polygon fill={fill_5} points="900 300 810 450 990 450" />
            <polygon fill={fill_4} points="900 300 990 150 810 150" />
            <polygon points="0 600 -90 750 90 750" />
            <polygon fill={fill_6} points="0 600 90 450 -90 450" />
            <polygon fill={fill_2} points="180 600 90 750 270 750" />
            <polygon fill={fill_1} points="180 600 270 450 90 450" />
            <polygon fill={fill_1} points="360 600 270 750 450 750" />
            <polygon fill={fill_4} points="360 600 450 450 270 450" />
            <polygon fill={fill_6} points="540 600 630 450 450 450" />
            <polygon fill={fill_7} points="720 600 630 750 810 750" />
            <polygon fill={fill_5} points="900 600 810 750 990 750" />
            <polygon fill={fill_7} points="900 600 990 450 810 450" />
            <polygon fill={fill_3} points="0 900 90 750 -90 750" />
            <polygon fill={fill_1} points="180 900 270 750 90 750" />
            <polygon fill={fill_5} points="360 900 450 750 270 750" />
            <polygon fill={fill_2} points="540 900 630 750 450 750" />
            <polygon fill={fill_5} points="720 900 810 750 630 750" />
            <polygon fill={fill_7} points="900 900 990 750 810 750" />
            <polygon fill={fill_7} points="1080 300 990 450 1170 450" />
            <polygon fill={fill_5} points="1080 300 1170 150 990 150" />
            <polygon points="1080 600 990 750 1170 750" />
            <polygon fill={fill_6} points="1080 600 1170 450 990 450" />
            <polygon fill={fill_3} points="1080 900 1170 750 990 750" />
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" fill={`url(#${firstId})`} width="100%" height="100%" />
      <rect x="0" y="0" fill={`url(#${secondId})`} width="100%" height="100%" />
    </svg>
  );
};

SubtlePrisma.defaultProps = {
  height: "450px",
  width: "540px",
  prismaHeight: "300px",
  prismaWidth: "250px",

  startFill: "#ffffff",
  stopFill: "#4FE",

  fill_1: "#444",
  fill_2: "#AAA",
  fill_3: "#DDD",
  fill_4: "#999",
  fill_5: "#FFF",
  fill_6: "#666",
  fill_7: "#222",
};

export default SubtlePrisma;
