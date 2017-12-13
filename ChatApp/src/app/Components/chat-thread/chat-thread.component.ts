import { Component, OnInit, EventEmitter} from '@angular/core';
import {
  Thread
} from '../../Models/Thread';

@Component({
  inputs: ['thread', 'selected'],
  outputs: ['onThreadSelected'],
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {

thread: Thread;
  selected: boolean;
  onThreadSelected: EventEmitter<Thread>;

  constructor() {
    this.onThreadSelected = new EventEmitter<Thread>();
  }

  clicked(event: any): void {
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }

  ngOnInit() {
  }

}
