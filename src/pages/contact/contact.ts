import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  allContacts: any;
  constructor(public navCtrl: NavController, private contacts: Contacts) {
    // this.contacts.pickContact().then(value => {
    //   console.log(value);
    // }).catch(err => {
    //   console.log(err);
    // });

    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
      .then(data => {
        this.allContacts = data;
        console.log(this.allContacts);
      });  }

}
