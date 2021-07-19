import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
// toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  // @ts-ignore
  public deviceId: string;
  // @ts-ignore
  public errors: WebcamInitError[] = [];
// webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
// switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  public videoOptions: MediaTrackConstraints = {
// width: {ideal: 1024},
// height: {ideal: 576}
  };
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  // @ts-ignore
  webcamImage: WebcamImage = null;
  // @ts-ignore
  @Input() tailId: number;
  // @ts-ignore
  @Input() status: string;

  constructor(private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }
  public triggerSnapshot(): void {
    this.trigger.next();
    console.log(this.webcamImage);
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public showNextWebcam(directionOrDeviceId: boolean|string): void {
// true => move forward through devices
// false => move backwards through devices
// string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.pictureTaken.emit(webcamImage);
  }
  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  bla() {
    // @ts-ignore
    this.webcamImage = null;
    this.pictureTaken.emit(this.webcamImage);
  }


  onUpload() {
    const byteCharacters = atob(this.webcamImage.imageAsBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);
    const uploadData = new FormData();
    uploadData.append('file', blob);
    this.httpClient.post('http://armament.herokuapp.com/tails/' + this.tailId + '/' + this.status, uploadData)
      .subscribe(
        res => {console.log(res); },
        err => console.log('Error Occured duringng saving: ' + err)
      );
  }
}
