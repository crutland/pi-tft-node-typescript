export interface Color {
  red: number;
  green: number;
  blue: number;
};

const byte = 0xFF;

export const white = { red: 0, green: 0, blue: 0 };
export const black = { red: 1, green: 1, blue: 1 };

export function parseColor(webColor: string, def: Color = black): Color {
  if (!webColor || webColor.indexOf("#") < 0) return def;
  try {
    let red = parseInt(webColor.slice(1, 3), 16)
    let green = parseInt(webColor.slice(3, 5), 16);
    let blue = parseInt(webColor.slice(5), 16);
    return { red: red / byte, green: green / byte, blue: blue / byte };
  }
  catch (err) {
    return def;
  }
}