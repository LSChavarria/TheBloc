import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from "@ionic/storage";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from "../pages/view-note/view-note";
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { AddPhotoPage } from '../pages/add-photo/add-photo';
import { ViewPhotoPage } from '../pages/view-photo/view-photo';
import { Photo } from '../models/photo';
import { AgmCoreModule } from '@agm/core';
import { ViewOnePhotoPage } from '../pages/view-one-photo/view-one-photo';
import { EditNotePage } from '../pages/edit-note/edit-note';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNotePage,
    AddPhotoPage,
    ViewPhotoPage,
    ViewNotePage,
    ViewOnePhotoPage,
    EditNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkbcCAhzQHggEb6Z5jIPHJqD6rrNmsV0Y'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNotePage,
    AddPhotoPage,
    ViewPhotoPage,
    ViewNotePage,
    ViewOnePhotoPage,
    EditNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
    Camera,
    Geolocation,
    Photo
  ]
})
export class AppModule {}
