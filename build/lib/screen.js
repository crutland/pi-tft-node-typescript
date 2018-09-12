"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pitft = require("pitft");
const color_1 = require("../models/color");
class Screen {
    constructor() {
        this.fb = pitft("/dev/fb1", true);
        this.size = this.fb.size();
    }
    setColor(color) { this.fb.color(color.red, color.blue, color.green); }
    updateDisplay() { this.fb.blit(); }
    clear() { this.fb.clear(); }
    fillScreen(color, render = false) {
        this.setColor(color);
        this.fb.rect(0, 0, this.size.width, this.size.height);
        if (render)
            this.updateDisplay();
    }
    printCenteredText(text, textColor = null, backgroundColor = null) {
        var textC = color_1.parseColor(textColor, color_1.white);
        var backC = color_1.parseColor(backgroundColor);
        this.clear();
        this.fillScreen(backC);
        this.setColor(textC);
        this.fb.font("fantasy", 25);
        this.fb.text(this.size.width / 2, this.size.height / 2, text, true);
        this.updateDisplay();
    }
}
exports.default = Screen;
//# sourceMappingURL=screen.js.map