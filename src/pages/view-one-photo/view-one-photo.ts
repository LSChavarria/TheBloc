import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Photo } from '../../models/photo';
import { NoteService } from '../../providers/note-service/note-service';

@IonicPage()
@Component({
  selector: 'page-view-one-photo',
  templateUrl: 'view-one-photo.html',
})
export class ViewOnePhotoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider:NoteService) {
    this.photo = this.navParams.get('photo');
  }

  photo: Photo;

  deleteOnePhoto(createDate: number) {
    this.provider.deletePhoto(createDate);
    this.navCtrl.pop();
  }

}
