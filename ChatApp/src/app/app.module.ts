import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'core-js/es6';
import 'core-js/es6';
import 'core-js/es7/reflect';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

// RxJS
import 'rxjs';
import 'ts-helpers';


import { AppComponent } from './app.component';
import { ChatMessageComponent } from './Components/chat-message/chat-message.component';
import { ChatThreadComponent } from './Components/chat-thread/chat-thread.component';
import { ChatNavBarComponent } from './Components/chat-nav-bar/chat-nav-bar.component';
import { ChatWindowComponent } from './Components/chat-window/chat-window.component';
import { ChatPageComponent } from './Components/chat-page/chat-page.component';
import { ChatThreadsComponent } from './Components/chat-threads/chat-threads.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    ChatPageComponent,
    ChatThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
