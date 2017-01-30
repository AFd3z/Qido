import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

//AF2 Settings 
export const firebaseConfig = {
    apiKey: "AIzaSyBfr-JM_Al_eqoa0B4NavPHy8wYN1k8fDU",
    authDomain: "quidoo-87f0a.firebaseapp.com",
    databaseURL: "https://quidoo-87f0a.firebaseio.com",
    storageBucket: "quidoo-87f0a.appspot.com",
    messagingSenderId: "386396484728"
 };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
