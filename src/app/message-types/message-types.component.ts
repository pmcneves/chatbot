import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-types',
  templateUrl: './message-types.component.html',
  styleUrls: ['./message-types.component.scss']
})
export class MessageTypesComponent implements OnInit {
  @Input() public message;
  constructor() { }

  ngOnInit(): void {
  }
}
