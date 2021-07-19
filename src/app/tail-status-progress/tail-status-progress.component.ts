import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TailStatus} from "../entities/tail-status";
import {WebcamImage} from "ngx-webcam";
import {BackendService} from "../services/backend.service";
import {Tail} from "../entities/tail";

@Component({
  selector: 'app-tail-status-progress',
  templateUrl: './tail-status-progress.component.html',
  styleUrls: ['./tail-status-progress.component.css']
})
export class TailStatusProgressComponent implements OnInit {

  // @ts-ignore
  tail: Tail;
  // @ts-ignore
  public webcamImage: WebcamImage = null;
  isLoading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private backendService: BackendService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.backendService.getTail(this.activatedRoute.snapshot.paramMap.get("id") as unknown as number).subscribe(a => {
      // @ts-ignore
      this.tail = a;
      console.log(this.tail);
      this.isLoading = false;
    })
  }

  public get tailStatus(): typeof TailStatus {
    return TailStatus;
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
