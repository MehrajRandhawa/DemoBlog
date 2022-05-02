import { Property } from "csstype";

export namespace colors {
  export namespace primary {
    export const BLUE_1 = "#6689DC";
    export const BLUE_2 = "#3356A9";
    export const BLUE_3 = "#002376";
    export const BLUE_4 = "#000E31";
    export const BLUE_5 = "#01061b";

    export const GRAY_1 = "#A1A5AB";
    export const GRAY_2 = "#55595F";
    export const GRAY_3 = "#22262C";
    export const GRAY_4 = "#4c525a";

    export const GREEN_1 = "#ECFFEE";
    export const GREEN_2 = "#B9FFBB";
    export const GREEN_3 = "#86EE88";

    export const RED_1 = "#FF8A6E";
    export const RED_2 = "#D7573B";
    export const RED_3 = "#A42408";

    export const WHITE_1 = "#F4FFFF";
    export const WHITE_2 = "#DAECFF";
    export const WHITE_3 = "#F3EAD7";
  }

  export namespace monochrome {
    export const BLACK = "#000000";
    export const WHITE = "#FFFFFF";
  }
}

export default colors;

export type RGB = {
  red: number;
  green: number;
  blue: number;
};

export const getRGB = (color: Property.Color): RGB => {
  const rgbHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  const rgb: RGB = { red: 0, green: 0, blue: 0 };

  if (rgbHex) {
    rgb.red = parseInt(rgbHex[1], 16);
    rgb.green = parseInt(rgbHex[2], 16);
    rgb.blue = parseInt(rgbHex[3], 16);
  }

  return rgb;
};

export const getRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = (random * 16) | 0;
    color += bit.toString(16);
  }

  return color;
};
