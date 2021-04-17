import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Photo } from '../../models/photo';
import { NgForm } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { NoteService } from '../../providers/note-service/note-service';

@IonicPage()
@Component({
  selector: 'page-add-photo',
  templateUrl: 'add-photo.html',
})
export class AddPhotoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider: NoteService,
              public camara: Camera,
              private geolocalizacion:Geolocation) {
  }

  dato: Photo = new Photo();

  latitud: number;
  longitud: number;

  Ejecutar(form:NgForm) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camara.DestinationType.DATA_URL,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE
    }
    
    this.camara.getPicture(options).then((imageData) => {
      this.dato.urlimagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {});

    this.obtenerLocalicacion();
    
    console.log('this.latitud', this.latitud);
    console.log('this.longitud', this.longitud);
    
    console.log('1 this.dato.lat', this.dato.lat);
    console.log('1 this.dato.lng', this.dato.lng);
  }

  obtenerLocalicacion() {
    this.geolocalizacion.getCurrentPosition().then((pos) => {
      console.log('pos.coords.latitude', pos.coords.latitude);
      console.log('pos.coords.longitude', pos.coords.longitude);
      this.latitud=this.dato.lat=+pos.coords.latitude;
      this.longitud=this.dato.lng=+pos.coords.longitude;
      console.log('this.latitud', this.latitud);
      console.log('this.longitud', this.longitud);
      this.dato.lat = this.latitud;
      this.dato.lng = this.longitud;
      console.log('this.dato.lat', this.dato.lat);
      console.log('this.dato.lng', this.dato.lng);
      this.provider.savePhoto(this.dato);
      this.navCtrl.pop();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
