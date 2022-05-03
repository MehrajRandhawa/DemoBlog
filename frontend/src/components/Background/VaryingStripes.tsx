import React, { useId } from "react";

interface IconProps {
}

const VaryingStripes: React.FunctionComponent<IconProps> = ({
  ...rest
}) => {
  const firstId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100% 100%"
      {...rest}
    >
      <defs>
        <linearGradient
          id={firstId}
          x1="0"
          x2="0"
          y1="0"
          y2="100%"
          gradientTransform="rotate(0,639,298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b6b6b6" />
          <stop offset="0.02" stop-color="#9E9E9E" />
          <stop offset="0.02" stop-color="#c5c5c5" />
          <stop offset="0.032" stop-color="#9E9E9E" />
          <stop offset="0.032" stop-color="#8f8f8f" />
          <stop offset="0.056" stop-color="#9E9E9E" />
          <stop offset="0.056" stop-color="#dadada" />
          <stop offset="0.07" stop-color="#9E9E9E" />
          <stop offset="0.07" stop-color="#a7a7a7" />
          <stop offset="0.1" stop-color="#9E9E9E" />
          <stop offset="0.1" stop-color="#a0a0a0" />
          <stop offset="0.126" stop-color="#9E9E9E" />
          <stop offset="0.126" stop-color="#d7d7d7" />
          <stop offset="0.142" stop-color="#9E9E9E" />
          <stop offset="0.142" stop-color="#a5a5a5" />
          <stop offset="0.159" stop-color="#9E9E9E" />
          <stop offset="0.159" stop-color="#9a9a9a" />
          <stop offset="0.17" stop-color="#9E9E9E" />
          <stop offset="0.17" stop-color="#898989" />
          <stop offset="0.197" stop-color="#9E9E9E" />
          <stop offset="0.197" stop-color="#9d9d9d" />
          <stop offset="0.218" stop-color="#9E9E9E" />
          <stop offset="0.218" stop-color="#d7d7d7" />
          <stop offset="0.239" stop-color="#9E9E9E" />
          <stop offset="0.239" stop-color="#bababa" />
          <stop offset="0.254" stop-color="#9E9E9E" />
          <stop offset="0.254" stop-color="#c8c8c8" />
          <stop offset="0.283" stop-color="#9E9E9E" />
          <stop offset="0.283" stop-color="#bbbbbb" />
          <stop offset="0.294" stop-color="#9E9E9E" />
          <stop offset="0.294" stop-color="#a0a0a0" />
          <stop offset="0.305" stop-color="#9E9E9E" />
          <stop offset="0.305" stop-color="#979797" />
          <stop offset="0.332" stop-color="#9E9E9E" />
          <stop offset="0.332" stop-color="#b3b3b3" />
          <stop offset="0.346" stop-color="#9E9E9E" />
          <stop offset="0.346" stop-color="#b2b2b2" />
          <stop offset="0.362" stop-color="#9E9E9E" />
          <stop offset="0.362" stop-color="#9d9d9d" />
          <stop offset="0.381" stop-color="#9E9E9E" />
          <stop offset="0.381" stop-color="#afafaf" />
          <stop offset="0.415" stop-color="#9E9E9E" />
          <stop offset="0.415" stop-color="#a0a0a0" />
          <stop offset="0.428" stop-color="#9E9E9E" />
          <stop offset="0.428" stop-color="#bbbbbb" />
          <stop offset="0.442" stop-color="#9E9E9E" />
          <stop offset="0.442" stop-color="#9f9f9f" />
          <stop offset="0.456" stop-color="#9E9E9E" />
          <stop offset="0.456" stop-color="#ababab" />
          <stop offset="0.498" stop-color="#9E9E9E" />
          <stop offset="0.498" stop-color="#acacac" />
          <stop offset="0.511" stop-color="#9E9E9E" />
          <stop offset="0.511" stop-color="#cccccc" />
          <stop offset="0.532" stop-color="#9E9E9E" />
          <stop offset="0.532" stop-color="#6e6e6e" />
          <stop offset="0.541" stop-color="#9E9E9E" />
          <stop offset="0.541" stop-color="#878787" />
          <stop offset="0.56" stop-color="#9E9E9E" />
          <stop offset="0.56" stop-color="#b0b0b0" />
          <stop offset="0.581" stop-color="#9E9E9E" />
          <stop offset="0.581" stop-color="#c4c4c4" />
          <stop offset="0.6" stop-color="#9E9E9E" />
          <stop offset="0.6" stop-color="#ebebeb" />
          <stop offset="0.618" stop-color="#9E9E9E" />
          <stop offset="0.618" stop-color="#949494" />
          <stop offset="0.656" stop-color="#9E9E9E" />
          <stop offset="0.656" stop-color="#808080" />
          <stop offset="0.679" stop-color="#9E9E9E" />
          <stop offset="0.679" stop-color="#acacac" />
          <stop offset="0.689" stop-color="#9E9E9E" />
          <stop offset="0.689" stop-color="#474747" />
          <stop offset="0.720" stop-color="#9E9E9E" />
          <stop offset="0.720" stop-color="#848484" />
          <stop offset="0.734" stop-color="#9E9E9E" />
          <stop offset="0.734" stop-color="#a4a4a4" />
          <stop offset="0.748" stop-color="#9E9E9E" />
          <stop offset="0.748" stop-color="#a8a8a8" />
          <stop offset="0.764" stop-color="#9E9E9E" />
          <stop offset="0.764" stop-color="#8c8c8c" />
          <stop offset="0.788" stop-color="#9E9E9E" />
          <stop offset="0.788" stop-color="#6b6b6b" />
          <stop offset="0.808" stop-color="#9E9E9E" />
          <stop offset="0.808" stop-color="#ababab" />
          <stop offset="0.831" stop-color="#9E9E9E" />
          <stop offset="0.831" stop-color="#9e9e9e" />
          <stop offset="0.856" stop-color="#9E9E9E" />
          <stop offset="0.856" stop-color="#9a9a9a" />
          <stop offset="0.872" stop-color="#9E9E9E" />
          <stop offset="0.872" stop-color="#b3b3b3" />
          <stop offset="0.894" stop-color="#9E9E9E" />
          <stop offset="0.894" stop-color="#888888" />
          <stop offset="0.914" stop-color="#9E9E9E" />
          <stop offset="0.914" stop-color="#989898" />
          <stop offset="0.942" stop-color="#9E9E9E" />
          <stop offset="0.942" stop-color="#b2b2b2" />
          <stop offset="0.957" stop-color="#9E9E9E" />
          <stop offset="0.957" stop-color="#e2e2e2" />
          <stop offset="0.973" stop-color="#9E9E9E" />
          <stop offset="0.973" stop-color="#dadada" />
          <stop offset="1" stop-color="#9E9E9E" />
          <stop offset="1" stop-color="#a0a0a0" />
        </linearGradient>
      </defs>
      <rect
        fill-opacity="1"
        fill={`url(#${firstId})`}
        x="0"
        y="0"
        width="100%"
        height="100%"
      />
    </svg>
  );
};

VaryingStripes.defaultProps = {
};

export default VaryingStripes;