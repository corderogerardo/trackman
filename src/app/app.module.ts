import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from "../pages/login-page/login-page";
import { MainPage } from "../pages/main-page/main-page";
import { TranslateLoader,TranslateModule,TranslateStaticLoader } from "ng2-translate";
import { Http,HttpModule } from "@angular/http";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { Keyboard } from "@ionic-native/keyboard";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage
  ],
  imports:[
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        platforms : {
          ios : {
            scrollAssist: false,    // Valid options appear to be [true, false]
            autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
          },
          android:{
            scrollAssist: false,    // Valid options appear to be [true, false]
            autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
          }
        }
      }
    ),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
