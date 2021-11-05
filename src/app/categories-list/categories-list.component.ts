import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() public choices;
  private messageType: 'message' | 'selected-category' = 'selected-category';
  constructor(private messagesServices: MessagesService) { }

  ngOnInit(): void {}

  selectCategory(choice: string):void {
    this.messagesServices.sendMessageToSocket({text: choice, messageType: this.messageType});
  }

}
