import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChatComponent implements OnInit {
  public isContainerShown = true;
  public messages = [
    { sender: 'bot', text: 'hi' },
    { sender: 'human', text: 'hello' },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleBox() {
    this.isContainerShown = !this.isContainerShown;
  }
}
