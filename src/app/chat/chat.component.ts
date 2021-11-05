import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChatComponent implements OnInit {
  public user = 'Pedro';
  public isContainerShown = true;
  public newMessage = '';
  public timeStamp = '';
  public messages = [];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(private changeDetector: ChangeDetectorRef, private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.connectToSocket();
    this.messagesService.messagesList.subscribe(messages => this.messages = messages)
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  private scrollToBottom(): void {
    this.myScrollContainer.nativeElement.scrollTop =
      this.myScrollContainer.nativeElement.scrollHeight;
  }

  public toggleBox(): void {
    this.isContainerShown = !this.isContainerShown;
  }

  public closeBox(): void {
    this.isContainerShown = false
  }

  public sendMessage(text = this.newMessage, messageType: "message" | "selected-category" = "message"): void {
    this.messagesService.sendMessageToSocket({text, messageType})
    this.newMessage = '';
    this.scrollToBottom();
  }
}
