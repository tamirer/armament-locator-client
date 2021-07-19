import {Component, Input, OnInit} from '@angular/core';
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-add-image-or-capture',
  templateUrl: './add-image-or-capture.component.html',
  styleUrls: ['./add-image-or-capture.component.css']
})
export class AddImageOrCaptureComponent implements OnInit {

  // @ts-ignore
  @Input() tailId: number;
  // @ts-ignore
  @Input() status: string;

  isUploadChosen: boolean = true;
  isInitialClick: boolean = false;
  // @ts-ignore
  public webcamImage: WebcamImage = null;

  constructor() { }

  ngOnInit(): void {
  }

  handleImage(webcamImage: WebcamImage) {
    // @ts-ignore
    this.webcamImage = webcamImage;
  }


}
