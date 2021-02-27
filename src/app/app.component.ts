import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import * as ExifReader from 'exifreader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  file: string;
  name: string;
  width: number;
  height: number;
  dpi: number;
  colorDepth: string;
  compressions: string;

  constructor( private cd: ChangeDetectorRef) {}

  onSelectFile(event): void {
    this.compressions = 'No compressions';
    this.file = '';
    const fileName = event.target.files[0].name;
    const rgxp = /(\d+)х(\d+)х(\d+)/g;
    const rgxp2 = /.\w+$/g;
    const rgxp3 = /\s_\d+/g;
    console.log(rgxp3.exec(fileName));
    const mtch = rgxp.exec(fileName);
    let comp = fileName;
    comp = comp.replace(rgxp, '').replace(rgxp2, '').replace(rgxp3, '');
    this.name = fileName;
    this.width = +mtch.slice(1, 4)[0];
    this.height = +mtch.slice(1, 4)[1];
    this.dpi = +mtch.slice(1, 4)[2];
    this.compressions = (comp) ? comp.split('+').join(', ') : ' No compressions ';
    this.getDepth(event.target.files[0], this.callBack.bind(this));
  }

  getDepth(file, callBack): void {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const readerResult: ArrayBuffer = readerEvent.target.result as ArrayBuffer;
      try {
        const exif = ExifReader.load(readerResult);
        if (exif) {
          let colorDpth = '';
          if (exif.BitsPerSample) {
            colorDpth = exif.BitsPerSample.value.length ? exif.BitsPerSample.value[0].toString() : exif.BitsPerSample.value.toString();
          } else {
            if (exif['Bits Per Sample']) {
              colorDpth = exif['Bits Per Sample'].value.length ?
                exif['Bits Per Sample'].value[0].toString() : exif['Bits Per Sample'].value.toString();
            }
            else {
            colorDpth = exif['Bit Depth'].value.toString();
            }
          }
          callBack(colorDpth, file);
        }
      }
      catch (err) {
        callBack('Unchecked', file);
      }
    };
    reader.readAsArrayBuffer(file);
    setTimeout(() => {
      reader.onload = () => {
        const rgxp2 = /.\w+$/g;
        const mtch = rgxp2.exec(file.name);
        console.log(mtch);
        if (mtch[0] === '.tif' || mtch[0] === '.pcx'){
          this.file = 'bad';
        } else {
          this.file = reader.result as string;
        }
        this.cd.detectChanges();
      };
      reader.readAsDataURL(file);
    }, 100);
  }

  callBack(depth: string, file): void {
    let dpiCalc = '';
    if (depth === 'Unchecked') {
      const rgxp = /(\d+)х(\d+)х(\d+)/g;
      const mtch = rgxp.exec(file.name);
      const width = +mtch.slice(1, 4)[0];
      const height = +mtch.slice(1, 4)[1];
      const dip = Math.round(file.size / width / height) > 1 ? Math.round(file.size / width / height) : 8;
      dpiCalc = ` ${dip}bit`;
    }
    this.colorDepth = !dpiCalc ? depth + 'bit' : dpiCalc;
    this.cd.detectChanges();
  }
}
