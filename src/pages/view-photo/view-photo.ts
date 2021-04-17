import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Photo } from '../../models/photo';
import { ViewOnePhotoPage } from '../view-one-photo/view-one-photo';

@IonicPage()
@Component({
  selector: 'page-view-photo',
  templateUrl: 'view-photo.html',
})
export class ViewPhotoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider:NoteService) {
  }

  private arreglo: Promise<Photo[]>;
  private photo: Photo;

  ionViewWillEnter(){
    this.arreglo = this.getPhotos();
  }

  getPhotos(){
    return this.provider.getAllPhotos();
  }

  getPhoto(createDate: number){
    this.provider.getPhoto(createDate).then((n)=>{
      this.photo = n;
      this.navCtrl.push(ViewOnePhotoPage, { photo: this.photo })
    })
  }
}
