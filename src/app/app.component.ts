import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login-page/login-page";
import {TranslateService} from "ng2-translate";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any, icon: string }>;
  rootPage: any = LoginPage;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public translate: TranslateService,
              public screenOrientation: ScreenOrientation,
              public keyboard: Keyboard) {
    this.initializeApp();
    this.translateConfig();

    // Declare all your pages( title, component, icon) to show and navigate from menu
    // you have to change Login page by your own pages component
    this.pages = [
      {title: 'menu.profile', component: LoginPage, icon: "person"},
      {title: 'menu.settings', component: LoginPage, icon: "settings"},
      {title: 'menu.howToUse', component: LoginPage, icon: "help-circle"},
      {title: 'menu.accesories', component: LoginPage, icon: "cart"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log(this.platform.platforms());
      if (this.platform.is('mobile')) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
      if (this.platform.is('tablet')) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      }

      this.keyboard.disableScroll(false);
      this.keyboard.hideKeyboardAccessoryBar(false);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  translateConfig() {
    //var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    //userLang = /(fr|en|de|cn|jp)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

