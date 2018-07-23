import {Injectable} from '@angular/core';

import {Chats} from "../../models/list.chat.modal";
import {AngularFireDatabase} from 'angularfire2/database';

/*
  Generated class for the GetListChatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetListChatsProvider {

  private ListRef;

  constructor(private db: AngularFireDatabase) {
    this.ListRef = this.db.list<Chats>('Chat-list' + localStorage.getItem('uid'));

  }
  getChatsList() {
    return this.ListRef;
  }

  addChats(val: Chats) {
    return this.ListRef.push(val);
  }
  updateChats(val: Chats) {
    return this.ListRef.update(val.key, val);
  }

  removeChats(val: Chats) {
    return this.ListRef.remove(val.key);
  }
}
