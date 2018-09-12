"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const byte = 0xFF;
exports.white = { red: 0, green: 0, blue: 0 };
exports.black = { red: 1, green: 1, blue: 1 };
function parseColor(webColor, def = exports.black) {
    if (!webColor || webColor.indexOf("#") < 0)
        return def;
    try {
        let red = parseInt(webColor.slice(1, 3), 16);
        let green = parseInt(webColor.slice(3, 5), 16);
        let blue = parseInt(webColor.slice(5), 16);
        return { red: red / byte, green: green / byte, blue: blue / byte };
    }
    catch (err) {
        return def;
    }
}
exports.parseColor = parseColor;
//# sourceMappingURL=color.js.map