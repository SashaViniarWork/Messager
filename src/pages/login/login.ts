import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {AuthProvider} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  GoToRegistartion() {
    // this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().push(RegistrationPage);
    this.navCtrl.push(RegistrationPage);
  }

  Login() {
    this.auth.login(this.email, this.password);
  }

}
