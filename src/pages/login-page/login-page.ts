import { Component,ViewChild,Output,EventEmitter } from '@angular/core';
import { IonicPage,NavController,NavParams,Nav } from 'ionic-angular';
import { MainPage } from "../main-page/main-page";
import { TranslatePipe } from "ng2-translate";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage
{
  visible = false;
  @Output() onLogin = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams,)
  {
  }

  login()
  {
    // navigate to the main page if it is not the current page
    this.navCtrl.setRoot(MainPage);
  }

  // Toggles between show and hide passwords
  showHidePassword(input: any, icon: any): any {
    this.visible = !this.visible;
    input.type = input.type === 'password' ?  'text' : 'password';
  }
}
