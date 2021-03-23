import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'DS';
  color;
  matrixOfColors: number[][];
  spinnerSelector = 0;
  laplasian = [[-1, -1, -1], [-1, 9, -1], [-1, -1, -1]];

  constructor(public spinner: NgxSpinnerService) {
  }

  haveSuch(i, j, width, height, ctx): number {
    if (j < 0 || i < 0 || i >= height || j >= width) {
      return 0;
    } else {
      return ctx.getImageData(j, i, 1, 1).data[0];
    }
  }

  ngOnInit(): void {
  }

  onDraw(): void {
    const img = document.getElementById('source4') as CanvasImageSource;
    if ('crossOrigin' in img) {
      img.crossOrigin = 'Anonymous';
    }
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = img.width as number;
    canvas.height = img.height as number;
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
    canvas2.width = img.width as number;
    canvas2.height = img.height as number;
    const ctx2 = canvas2.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const id = ctx.createImageData(1, 1);
    const d = id.data;
    // for (let i = 0; i < +img.height; i++) {
    //   for (let j = 0; j < +img.width; j++) {
    //     const grayScale = ctx.getImageData(j, i, 1, 1).data[0];
    //     d[0] = grayScale;
    //     d[1] = grayScale;
    //     d[2] = grayScale;
    //     d[3] = 255;
    //     ctx.putImageData(id, j, i);
    //   }
    // }
    this.drawingFunc(ctx, ctx2, img, d, 0, id);
  }

  drawingFunc(ctx, ctx2, img, d, iStart, id): void {
    for (let i = iStart; i < ((iStart + 10) < +img.height ? (iStart + 10) : +img.height); i++) {
      for (let j = 0; j < +img.width; j++) {
        this.color = this.makeBetterIso(i, j, +img.width, +img.height, ctx);
        d[0] = this.color;
        d[1] = this.color;
        d[2] = this.color;
        d[3] = 255;
        ctx2.putImageData(id, j, i);
      }
    }
    if ((iStart + 10) < +img.height) {
      setTimeout(() => {
        return this.drawingFunc(ctx, ctx2, img, d, iStart + 10, id);
      }, 100);
    } else {
      this.spinner.hide();
      this.spinnerSelector = 0;
      return;
    }
  }

  onDraw2(): void {
    const epsilon = 0.001;
    const img = document.getElementById('source4') as CanvasImageSource;
    if ('crossOrigin' in img) {
      img.crossOrigin = 'Anonymous';
    }
    const canvas = document.getElementById('canvas3') as HTMLCanvasElement;
    canvas.width = img.width as number;
    canvas.height = img.height as number;
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('canvas4') as HTMLCanvasElement;
    canvas2.width = img.width as number;
    canvas2.height = img.height as number;
    const ctx2 = canvas2.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const id = ctx2.createImageData(1, 1);
    const d = id.data;
    // for (let i = 0; i < +img.height; i++) {
    //   for (let j = 0; j < +img.width; j++) {
    //     const grayScale = ctx.getImageData(j, i, 1, 1).data[0];
    //     d[0] = grayScale;
    //     d[1] = grayScale;
    //     d[2] = grayScale;
    //     d[3] = 255;
    //     ctx.putImageData(id, j, i);
    //   }
    // }
    setTimeout(() => {
      this.adaptiveThresholding(ctx, ctx2, img, d, id, 150, epsilon);
    }, 0);
  }

  onDraw3(): void {
    const img = document.getElementById('source4') as CanvasImageSource;
    if ('crossOrigin' in img) {
      img.crossOrigin = 'Anonymous';
    }
    const canvas = document.getElementById('canvas5') as HTMLCanvasElement;
    canvas.width = img.width as number;
    canvas.height = img.height as number;
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('canvas6') as HTMLCanvasElement;
    canvas2.width = img.width as number;
    canvas2.height = img.height as number;
    const ctx2 = canvas2.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const id = ctx2.createImageData(1, 1);
    const d = id.data;
    // for (let i = 0; i < +img.height; i++) {
    //   for (let j = 0; j < +img.width; j++) {
    //     const grayScale = ctx.getImageData(j, i, 1, 1).data[0];
    //     d[0] = grayScale;
    //     d[1] = grayScale;
    //     d[2] = grayScale;
    //     d[3] = 255;
    //     ctx.putImageData(id, j, i);
    //   }
    // }
    setTimeout(() => {
      this.adaptiveThresholdingGrad(ctx, ctx2, img, d, id);
    }, 0);
  }

  onDraw4(): void {
    const img = document.getElementById('source2') as CanvasImageSource;
    if ('crossOrigin' in img) {
      img.crossOrigin = 'Anonymous';
    }
    const canvas = document.getElementById('canvas7') as HTMLCanvasElement;
    canvas.width = img.width as number;
    canvas.height = img.height as number;
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('canvas8') as HTMLCanvasElement;
    canvas2.width = img.width as number;
    canvas2.height = img.height as number;
    const ctx2 = canvas2.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const id = ctx2.createImageData(1, 1);
    const d = id.data;
    // for (let i = 0; i < +img.height; i++) {
    //   for (let j = 0; j < +img.width; j++) {
    //     const grayScale = ctx.getImageData(j, i, 1, 1).data[0];
    //     d[0] = grayScale;
    //     d[1] = grayScale;
    //     d[2] = grayScale;
    //     d[3] = 255;
    //     ctx.putImageData(id, j, i);
    //   }
    // }
    setTimeout(() => {
      this.adaptiveThresholdingNotGlobal(ctx, ctx2, img, d, id, 4, 0);
    }, 0);
  }

  makeBetterIso(i, j, width, height, ctx): number {
    let resultNumber = 0;
    for (let k = -1; k < 2; k++) {
      for (let l = -1; l < 2; l++) {
        resultNumber += this.laplasian[k + 1][l + 1] * this.haveSuch(i + k, j + l, width, height, ctx);
      }
    }
    return resultNumber;
  }

  adaptiveThresholding(ctx, ctx2, img, d, id, t, epsilon): void {
    let mu1 = 0;
    let mu2 = 0;
    let mu1N = 0;
    let mu2N = 0;
    for (let i = 0; i < +img.height; i++) {
      for (let j = 0; j < +img.width; j++) {
        const currentPixel = ctx.getImageData(j, i, 1, 1).data[0];
       // console.log(currentPixel);
        if (currentPixel < t) {
          mu1 += currentPixel;
          mu1N++;
        } else {
          mu2 += currentPixel;
          mu2N++;
        }
      }
    }
    let newT = (mu1 / mu1N + mu2 / mu2N) / 2;
    if (newT !== newT) {
      newT = 1;
    }
    if (Math.abs(t - newT) <= epsilon) {
      console.log('end');
      this.drawingFunc2(ctx, ctx2, img, d, 0, id, newT);
    } else {
      setTimeout(() => {
        console.log(newT);
        return this.adaptiveThresholding(ctx, ctx2, img, d, id, newT, epsilon);
      }, 100);
    }
  }

  adaptiveThresholdingNotGlobal(ctx, ctx2, img, d, id, K, iStart): void {
    for (let i = iStart; i < ((iStart + 10) < +img.height ? (iStart + 10) : +img.height); i++) {
      for (let j = 0; j < +img.width; j++) {
        this.adaptatePixel(ctx, ctx2, img, d, id, K, i, j, 0.3);
      }
    }
    if ((iStart + 10) < +img.height) {
      setTimeout(() => {
        return this.adaptiveThresholdingNotGlobal(ctx, ctx2, img, d, id, K, iStart + 10);
      }, 100);
    } else {
      this.spinner.hide();
      this.spinnerSelector = 0;
      return;
    }
  }

  adaptatePixel(ctx, ctx2, img, d, id, K, i, j, alpha): void {
    if (i === 0 && j === 0) {
      console.log('Im in');
    }
    let fMaximum = -Infinity;
    let fMinimum = Infinity;
    let P = 0;
    for (let k = -K; k <= K; k++) {
      for (let l = -K; l <= K; l++) {
        const element = this.haveSuch(i + k, j + l, +img.width, +img.height, ctx);
        if (element > fMaximum) {
          fMaximum = element;
        }

        if (element < fMinimum) {
          fMinimum = element;
        }

        P += element;
      }
    }
    P = P / ((2 * K + 1) * (2 * K + 1));
    // console.log(P);
    const deltaFMin = Math.abs(fMinimum - P);
    const deltaFMax = Math.abs(fMaximum - P);
    let t;
    const currentPixel = ctx.getImageData(j, i, 1, 1).data[0];
    if (deltaFMax > deltaFMin) {
      t = alpha * (2 * fMinimum + P) / 3;
      // console.log(t);
      if (currentPixel > Math.abs(P - t)) {
        d[0] = 255;
        d[1] = 255;
        d[2] = 255;
        d[3] = 255;
      } else {
        d[0] = 0;
        d[1] = 0;
        d[2] = 0;
        d[3] = 255;
      }
      ctx2.putImageData(id, j, i);
    }

    if (deltaFMax < deltaFMin) {
      t = alpha * (fMinimum + 2 * P) / 3;
      // console.log(t);
      if (currentPixel > Math.abs(P - t)) {
        d[0] = 255;
        d[1] = 255;
        d[2] = 255;
        d[3] = 255;
      } else {
        d[0] = 0;
        d[1] = 0;
        d[2] = 0;
        d[3] = 255;
      }
      ctx2.putImageData(id, j, i);
    }

    if (deltaFMax === deltaFMin) {
      if (fMinimum === fMinimum) {
        t = alpha * P;
        if (currentPixel > Math.abs(P - t)) {
          d[0] = 255;
          d[1] = 255;
          d[2] = 255;
          d[3] = 255;
        } else {
          d[0] = 0;
          d[1] = 0;
          d[2] = 0;
          d[3] = 255;
        }
        ctx2.putImageData(id, j, i);
      } else {
        return this.adaptatePixel(ctx, ctx2, img, d, id, K + 1, i, j, alpha);
      }
    }
  }

  adaptiveThresholdingGrad(ctx, ctx2, img, d, id): void {
    let numerator = 0;
    let denominator = 0;
    for (let i = 0; i < +img.height; i++) {
      for (let j = 0; j < +img.width; j++) {
        const currentPixel = ctx.getImageData(j, i, 1, 1).data[0];
        const xPlusOnePixel = this.haveSuch(j + 1, i, +img.width, +img.height, ctx);
        const yPlusOnePixel = this.haveSuch(j, i + 1, +img.width, +img.height, ctx);
        const G = Math.max(Math.abs(xPlusOnePixel), Math.abs(yPlusOnePixel));
        numerator += (G * currentPixel);
        denominator += G;
      }
    }
    const newT = numerator / denominator;
    console.log(newT);
    this.drawingFunc2(ctx, ctx2, img, d, 0, id, newT);
  }

  drawingFunc2(ctx, ctx2, img, d, iStart, id, t): void {
    for (let i = iStart; i < ((iStart + 10) < +img.height ? (iStart + 10) : +img.height); i++) {
      for (let j = 0; j < +img.width; j++) {
        const currentPixel = ctx.getImageData(j, i, 1, 1).data[0];
        if (currentPixel < t) {
          d[0] = 0;
          d[1] = 0;
          d[2] = 0;
          d[3] = 255;
        } else {
          d[0] = 255;
          d[1] = 255;
          d[2] = 255;
          d[3] = 255;
        }
        ctx2.putImageData(id, j, i);
      }
    }
    if ((iStart + 10) < +img.height) {
      setTimeout(() => {
        return this.drawingFunc2(ctx, ctx2, img, d, iStart + 10, id, t);
      }, 100);
    } else {
      this.spinner.hide();
      this.spinnerSelector = 0;
      return;
    }
  }
}
