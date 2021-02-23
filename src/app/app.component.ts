import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as ExifReader from 'exifreader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  onSelectFile(event): void {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const readerResult: ArrayBuffer = readerEvent.target.result as ArrayBuffer;
      console.log(readerResult);
      console.log(ExifReader.load(readerResult));
    };
    reader.readAsArrayBuffer(event.target.files[0]);
    // ExifReader.load()
  }

  ngOnInit(): void {
  }
}
