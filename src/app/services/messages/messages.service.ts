import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public messagesList: Subject<any[]> = new Subject<any[]>();
  public messages = [];
  constructor(private socket: Socket) {}

  connectToSocket() {
    this.socket.emit('join');
    this.socket.on('message', (messageObj) =>
      this.sendMessageToChat(messageObj)
    );
  }

  sendMessageToSocket(messageBody: {
    text: string;
    messageType: 'message' | 'selected-category';
  }) {
    this.socket.emit(
      messageBody.messageType,
      messageBody.text
    );
  }

  sendMessageToChat(messageBody: any) {
    this.messages.push(messageBody);
    this.messagesList.next(this.messages);
  }
}
