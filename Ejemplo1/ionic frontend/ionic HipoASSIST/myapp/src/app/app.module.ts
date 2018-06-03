import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PruebaPage } from '../pages/prueba/prueba';
import { InformacionPage } from '../pages/informacion/informacion';
import { RegistracionPage } from '../pages/registracion/registracion';
import { ErrorloginPage } from '../pages/errorlogin/errorlogin';
import { HttpClientModule} from '@angular/common/http';
import { ServiceAddUserProvider } from '../providers/service-add-user/service-add-user';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PruebaPage,
    RegistracionPage,
    InformacionPage,
    ErrorloginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PruebaPage,
    RegistracionPage,
    InformacionPage,
    ErrorloginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceAddUserProvider
  ]
})
export class AppModule {}
