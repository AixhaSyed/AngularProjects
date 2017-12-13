import { Component, OnInit } from '@angular/core';
// import { Message } from '../Models/Message';
//import { Message} from './Message'
//import {Message} from '.././Models/Message'
import { Message } from '../../Models/Message';
@Component({
  inputs: ['message'],
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {


message: Message;
  incoming: boolean;

  ngOnInit(): void {
    this.incoming = !this.message.author.isClient;
  }
  constructor() { }

}
