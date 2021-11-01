import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [BrowserModule],
})
export class AppModule {
  constructor(private injector: Injector) {
    const chat = createCustomElement(ChatComponent, { injector });
    customElements.define('app-chat', chat);
  }
  ngDoBootstrap() {}
}
