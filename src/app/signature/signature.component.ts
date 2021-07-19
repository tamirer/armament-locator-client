import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  @Output() onSubmit: EventEmitter<void> = new EventEmitter<void>();
  // @ts-ignore
  personalNumber: string = '';
  // @ts-ignore
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
