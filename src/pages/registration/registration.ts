import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  email: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Registration() {

    this.auth.signup(this.email, this.password);
  }

}
