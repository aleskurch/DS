import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'DS';
  redCommon = 197;
  blueCommon = 19;
  greenCommon = 203;
  xCommon = this.RGBtoXYZ(197, 19, 203)[0];
  yCommon = this.RGBtoXYZ(197, 19, 203)[1];
  zCommon = this.RGBtoXYZ(197, 19, 203)[2];
  hCommon = this.RGBtoHSV(197, 19, 203)[0];
  sCommon = this.RGBtoHSV(197, 19, 203)[1];
  vCommon = this.RGBtoHSV(197, 19, 203)[2];
  rgbColor = 'rgb(197, 19, 203)';

  ngOnInit(): void {
    document.getElementById('common').style.backgroundColor = `rgb(197, 19, 203)`;
  }

  OnSliderRedChange(redSlider: MatSliderChange): void {
    this.redCommon = redSlider.value;
    const toXYZ = this.RGBtoXYZ(this.redCommon, this.greenCommon, this.blueCommon);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    const toHSV = this.RGBtoHSV(this.redCommon, this.greenCommon, this.blueCommon);
    this.hCommon = toHSV[0];
    this.sCommon = toHSV[1];
    this.vCommon = toHSV[2];
    document.getElementById('common').style.backgroundColor = `rgb(${this.redCommon},${this.greenCommon},${this.blueCommon})`;
  }

  OnSliderGreenChange(greenSlider: MatSliderChange): void {
    this.greenCommon = greenSlider.value;
    const toXYZ = this.RGBtoXYZ(this.redCommon, this.greenCommon, this.blueCommon);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    const toHSV = this.RGBtoHSV(this.redCommon, this.greenCommon, this.blueCommon);
    this.hCommon = toHSV[0];
    this.sCommon = toHSV[1];
    this.vCommon = toHSV[2];
    document.getElementById('common').style.backgroundColor = `rgb(${this.redCommon},${this.greenCommon},${this.blueCommon})`;
  }

  OnSliderBlueChange(blueSlider: MatSliderChange): void {
    this.blueCommon = blueSlider.value;
    const toXYZ = this.RGBtoXYZ(this.redCommon, this.greenCommon, this.blueCommon);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    const toHSV = this.RGBtoHSV(this.redCommon, this.greenCommon, this.blueCommon);
    this.hCommon = toHSV[0];
    this.sCommon = toHSV[1];
    this.vCommon = toHSV[2];
    document.getElementById('common').style.backgroundColor = `rgb(${this.redCommon},${this.greenCommon},${this.blueCommon})`;
  }

  OnSliderXChange(xSlider: MatSliderChange): void {
    this.xCommon = xSlider.value;
    const toRGB = this.XYZtoRGB(this.xCommon, this.yCommon, this.zCommon);
    if (toRGB[3] !== -Infinity) {
      this.redCommon = toRGB[0];
      this.greenCommon = toRGB[1];
      this.blueCommon = toRGB[2];
      const toHSV = this.RGBtoHSV(toRGB[0], toRGB[1], toRGB[2]);
      this.hCommon = toHSV[0];
      this.sCommon = toHSV[1];
      this.vCommon = toHSV[2];
      document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
    } else {
      alert('Invalid Color');
    }
  }

  OnSliderYChange(ySlider: MatSliderChange): void {
    this.yCommon = ySlider.value;
    const toRGB = this.XYZtoRGB(this.xCommon, this.yCommon, this.zCommon);
    if (toRGB[3] !== -Infinity) {
      this.redCommon = toRGB[0];
      this.greenCommon = toRGB[1];
      this.blueCommon = toRGB[2];
      const toHSV = this.RGBtoHSV(toRGB[0], toRGB[1], toRGB[2]);
      this.hCommon = toHSV[0];
      this.sCommon = toHSV[1];
      this.vCommon = toHSV[2];
      document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
    } else {
      alert('Invalid Color');
    }
  }

  OnSliderZChange(zSlider: MatSliderChange): void {
    this.zCommon = zSlider.value;
    const toRGB = this.XYZtoRGB(this.xCommon, this.yCommon, this.zCommon);
    if (toRGB[3] !== -Infinity) {
      this.redCommon = toRGB[0];
      this.greenCommon = toRGB[1];
      this.blueCommon = toRGB[2];
      const toHSV = this.RGBtoHSV(toRGB[0], toRGB[1], toRGB[2]);
      this.hCommon = toHSV[0];
      this.sCommon = toHSV[1];
      this.vCommon = toHSV[2];
      document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
    } else {
      alert('Invalid Color');
    }
  }

  onChangeInput(): void {
    if (this.redCommon > 255 || this.redCommon < 0) {
      alert('Wrong value');
      this.redCommon = 255;
    }
    if (this.greenCommon > 255 || this.greenCommon < 0) {
      alert('Wrong value');
      this.greenCommon = 255;
    }
    if (this.blueCommon > 255 || this.blueCommon < 0) {
      alert('Wrong value');
      this.blueCommon = 255;
    }
    const toXYZ = this.RGBtoXYZ(this.redCommon, this.greenCommon, this.blueCommon);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    const toHSV = this.RGBtoHSV(this.redCommon, this.greenCommon, this.blueCommon);
    this.hCommon = toHSV[0];
    this.sCommon = toHSV[1];
    this.vCommon = toHSV[2];
    document.getElementById('common').style.backgroundColor = `rgb(${this.redCommon},${this.greenCommon},${this.blueCommon})`;
  }

  onChangeInputXYZ(): void {
    if (this.xCommon > 1 || this.xCommon < 0) {
      alert('Wrong value');
      this.xCommon = 1;
    }
    if (this.yCommon > 1 || this.yCommon < 0) {
      alert('Wrong value');
      this.yCommon = 1;
    }
    if (this.zCommon > 1 || this.zCommon < 0) {
      alert('Wrong value');
      this.zCommon = 1;
    }
    const toRGB = this.XYZtoRGB(this.xCommon, this.yCommon, this.zCommon);
    if (toRGB[3] !== -Infinity) {
      this.redCommon = toRGB[0];
      this.greenCommon = toRGB[1];
      this.blueCommon = toRGB[2];
      const toHSV = this.RGBtoHSV(toRGB[0], toRGB[1], toRGB[2]);
      this.hCommon = toHSV[0];
      this.sCommon = toHSV[1];
      this.vCommon = toHSV[2];
      document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
    } else {
      alert('Invalid Color');
    }
  }

  onChangeInputHSV(): void {
    if (this.hCommon > 1 || this.hCommon < 0) {
      alert('Wrong value');
      this.hCommon = 1;
    }
    if (this.sCommon > 1 || this.sCommon < 0) {
      alert('Wrong value');
      this.sCommon = 1;
    }
    if (this.vCommon > 1 || this.vCommon < 0) {
      alert('Wrong value');
      this.vCommon = 1;
    }
    const toRGB = this.HSVtoRGB(this.hCommon, this.sCommon, this.vCommon);
    this.redCommon = toRGB[0];
    this.greenCommon = toRGB[1];
    this.blueCommon = toRGB[2];
    const toXYZ = this.RGBtoXYZ(toRGB[0], toRGB[1], toRGB[2]);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
  }

  OnSliderHChange(hSlider: MatSliderChange): void {
    this.hCommon = hSlider.value;
    const toRGB = this.HSVtoRGB(this.hCommon, this.sCommon, this.vCommon);
    this.redCommon = toRGB[0];
    this.greenCommon = toRGB[1];
    this.blueCommon = toRGB[2];
    const toXYZ = this.RGBtoXYZ(toRGB[0], toRGB[1], toRGB[2]);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
  }

  OnSliderSChange(sSlider: MatSliderChange): void {
    this.sCommon = sSlider.value;
    const toRGB = this.HSVtoRGB(this.hCommon, this.sCommon, this.vCommon);
    this.redCommon = toRGB[0];
    this.greenCommon = toRGB[1];
    this.blueCommon = toRGB[2];
    const toXYZ = this.RGBtoXYZ(toRGB[0], toRGB[1], toRGB[2]);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
  }

  OnSliderVChange(vSlider: MatSliderChange): void {
    this.vCommon = vSlider.value;
    const toRGB = this.HSVtoRGB(this.hCommon, this.sCommon, this.vCommon);
    this.redCommon = toRGB[0];
    this.greenCommon = toRGB[1];
    this.blueCommon = toRGB[2];
    const toXYZ = this.RGBtoXYZ(toRGB[0], toRGB[1], toRGB[2]);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    document.getElementById('common').style.backgroundColor = `rgb(${toRGB[0]},${toRGB[1]},${toRGB[2]})`;
  }

  XYZtoRGB(X, Y, Z): number[] {
    const R = Math.round(this.adj(3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z) * 255);
    const G = Math.round(this.adj(-0.9692660 * X + 1.8760108 * Y + 0.0415560 * Z) * 255);
    const B = Math.round(this.adj(0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z) * 255);
    console.log([R, G, B]);
    if (R > 255 || R < 0 || G > 255 || G < 0 || B > 255 || B < 0) {
      return [213, 71, 120, -Infinity];
    } else {
      return [R, G, B, Infinity];
    }
  }

  RGBtoXYZ(sR, sG, sB): number[] {
    let varR = (sR / 255);
    let varG = (sG / 255);
    let varB = (sB / 255);

    if (varR > 0.04045) {
      varR = Math.pow((varR + 0.055) / 1.055, 2.4);
    } else {
      varR = varR / 12.92;
    }
    if (varG > 0.04045) {
      varG = Math.pow((varG + 0.055) / 1.055, 2.4);
    } else {
      varG = varG / 12.92;
    }
    if (varB > 0.04045) {
      varB = Math.pow((varB + 0.055) / 1.055, 2.4);
    } else {
      varB = varB / 12.92;
    }

    const X = varR * 0.4124 + varG * 0.3576 + varB * 0.1805;
    const Y = varR * 0.2126 + varG * 0.7152 + varB * 0.0722;
    const Z = varR * 0.0193 + varG * 0.1192 + varB * 0.9505;
    return [+X.toFixed(4), +Y.toFixed(4), +Z.toFixed(4)];
  }

  RGBtoHSV(r, g, b): number[] {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h;
    const s = (max === 0 ? 0 : d / max);
    const v = max / 255;

    switch (max) {
      case min:
        h = 0;
        break;
      case r:
        h = (g - b) + d * (g < b ? 6 : 0);
        h /= 6 * d;
        break;
      case g:
        h = (b - r) + d * 2;
        h /= 6 * d;
        break;
      case b:
        h = (r - g) + d * 4;
        h /= 6 * d;
        break;
    }

    return [+h.toFixed(4), +s.toFixed(4), +v.toFixed(4)];
  }

  HSVtoRGB(h, s, v): number[] {
    let r;
    let g;
    let b;
    let i;
    let f;
    let p;
    let q;
    let t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0: {
        r = v;
        g = t;
        b = p;
      }
              break;
      case 1: {
        r = q;
        g = v;
        b = p;
      }
              break;
      case 2: {
        r = p;
        g = v;
        b = t;
      }
              break;
      case 3: {
        r = p;
        g = q;
        b = v;
      }
              break;
      case 4: {
        r = t;
        g = p;
        b = v;
      }
              break;
      case 5: {
        r = v;
        g = p;
        b = q;
      }
              break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  adj(C): number {
    if (C < 0) {
      return -1;
    }
    if (Math.abs(C) < 0.0031308) {
      return 12.92 * C;
    }
    return 1.055 * Math.pow(C, 0.41666) - 0.055;
  }

  colorPickerSelcted(color: string): void {
    const matchColors = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    const match = matchColors.exec(color);
    this.redCommon = +match[1];
    this.greenCommon = +match[2];
    this.blueCommon = +match[3];
    const toXYZ = this.RGBtoXYZ(this.redCommon, this.greenCommon, this.blueCommon);
    this.xCommon = toXYZ[0];
    this.yCommon = toXYZ[1];
    this.zCommon = toXYZ[2];
    const toHSV = this.RGBtoHSV(this.redCommon, this.greenCommon, this.blueCommon);
    this.hCommon = toHSV[0];
    this.sCommon = toHSV[1];
    this.vCommon = toHSV[2];
  }
}
