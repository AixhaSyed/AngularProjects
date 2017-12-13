import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app-store';
import { Store } from 'redux';
import {
  Thread
} from '../models';
import {
  ThreadActions
} from '../actions';
import {
  AppState,
  getCurrentThread,
  getAllThreads
} from '../reducers';
import ChatThread from '../components/ChatThread';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {

 threads: Thread[];
  currentThreadId: string;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    let state = this.store.getState();

    // Store the threads list
    this.threads = getAllThreads(state);

    // We want to mark the current thread as selected,
    // so we store the currentThreadId as a value
    this.currentThreadId = getCurrentThread(state).id;
  }

  handleThreadClicked(thread: Thread) {
    this.store.dispatch(ThreadActions.selectThread(thread));
  }

  ngOnInit() {
  }

}
