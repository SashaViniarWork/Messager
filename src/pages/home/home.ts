import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertctrl: AlertController, private localNotifications: LocalNotifications, private plt: Platform) {

  }

  myNotification(){
    this.plt.ready().then(() => {
    this.localNotifications.schedule({
    id: 1,
    title: 'Hey You!',
    text: 'Its notification',
    trigger:{at: new Date(new Date().getTime() + 3600)},
    data: {nicedata: 'You clicked Notification, are you?'}
   });
  });
  }

}
