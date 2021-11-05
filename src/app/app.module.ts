import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from './chat/chat.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { MessageTypesComponent } from './message-types/message-types.component';
import { ItemsListComponent } from './items-list/items-list.component';


const config: SocketIoConfig = { url: 'http://localhost:3002' };
@NgModule({
  declarations: [ChatComponent, CategoriesListComponent, MessageTypesComponent, ItemsListComponent],
  imports: [BrowserModule, FormsModule, SocketIoModule.forRoot(config)],
})
export class AppModule {
  constructor(private injector: Injector) {
    const chat = createCustomElement(ChatComponent, { injector });
    customElements.define('app-chat', chat);
  }
  ngDoBootstrap() {}
}
