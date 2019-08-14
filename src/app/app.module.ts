import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatailsPage } from '../pages/datails/datails';
import { LoginPage } from '../pages/login/login';

//agregado a los imports para FireBase los 3 imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ArticulosServices } from '../services/articulosServices';
import { RegistrarPage } from '../pages/registrar/registrar';
import { MostrarPage } from '../pages/mostrar/mostrar';

//para vlidar la conexion con FireBase
export const firebaseConfig = {
  apiKey: "AIzaSyAVIk9UQquM42Xka7khNqn05A2aNTPeSgE",
    authDomain: "citasmedicas-4e957.firebaseapp.com",
    databaseURL: "https://citasmedicas-4e957.firebaseio.com",
    projectId: "citasmedicas-4e957",
    storageBucket: "",
    messagingSenderId: "769346425509",
    appId: "1:769346425509:web:dd5b3fb711cf81a0"
};
//hasta aqui lo de la conexion

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatailsPage,
    LoginPage,
    RegistrarPage,
    MostrarPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), //agregado a los imports para FireBase
    AngularFireDatabaseModule, //agregado a los imports para FireBase
    AngularFireAuthModule //agregado a los imports para FireBase y authenticate user
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatailsPage,
    LoginPage,
    RegistrarPage,
    MostrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase, //agregado a los imports para FireBase
    ArticulosServices //agrgeado 
  ]
})
export class AppModule {}
