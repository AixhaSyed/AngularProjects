import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app-store';
import { Store } from 'redux';
import {
  AppState,
  getUnreadMessagesCount
} from '../reducers';
@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
unreadMessagesCount: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());

  ngOnInit() {
  }

}
