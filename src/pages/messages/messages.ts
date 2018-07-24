import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  AddContact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  AddChat() {
    this.contacts.pickContact().then(value => {
      console.log(value);
    }).catch(err => {
      console.log(err);
    });
  }
}
