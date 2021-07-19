import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TailStatusProgressComponent} from './tail-status-progress/tail-status-progress.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UploadImageComponent} from './upload-image/upload-image.component';
import {HttpClientModule} from "@angular/common/http";
import {WebcamModule} from "ngx-webcam";
import {CameraComponent} from './camera/camera.component';
import {AddImageOrCaptureComponent} from './add-image-or-capture/add-image-or-capture.component';
import {SignatureComponent} from './signature/signature.component';
import {BidiModule} from "@angular/cdk/bidi";

@NgModule({
  declarations: [
    AppComponent,
    TailStatusProgressComponent,
    UploadImageComponent,
    CameraComponent,
    AddImageOrCaptureComponent,
    SignatureComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        WebcamModule,
        BidiModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
