import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tail} from "../entities/tail";
import {TAILS} from "../../mock-data/tails";

@Component({
  selector: 'app-tail-status-progress',
  templateUrl: './tail-status-progress.component.html',
  styleUrls: ['./tail-status-progress.component.css']
})
export class TailStatusProgressComponent implements OnInit {

  tail: Tail;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tail = TAILS.filter((tail: Tail) =>
      tail.id.toString() === this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }

}
