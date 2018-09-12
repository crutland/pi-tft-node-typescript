import pitft from "pitft";
import { Color, parseColor, white } from "../models/color";
import Size from "../models/size";

export default class Screen {

  private fb: pitft.FrameBuffer;
  private size: Size;

  constructor() {
    this.fb = pitft("/dev/fb1", true);
    this.size = this.fb.size();
  }

  private setColor(color: Color) { this.fb.color(color.red, color.blue, color.green); }
  private updateDisplay() { this.fb.blit(); }
  private clear() { this.fb.clear(); }

  fillScreen(color: Color, render = false) {
    this.setColor(color);
    this.fb.rect(0, 0, this.size.width, this.size.height);
    if (render)
      this.updateDisplay();
  }

  printCenteredText(text: string, textColor = null, backgroundColor = null) {
    var textC = parseColor(textColor, white);
    var backC = parseColor(backgroundColor);
    this.clear();
    this.fillScreen(backC);
    this.setColor(textC);
    this.fb.font("fantasy", 25);
    this.fb.text(this.size.width / 2, this.size.height / 2, text, true);
    this.updateDisplay();
  }
}