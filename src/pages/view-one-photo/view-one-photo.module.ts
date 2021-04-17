import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewOnePhotoPage } from './view-one-photo';

@NgModule({
  declarations: [
    ViewOnePhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewOnePhotoPage),
  ],
})
export class ViewOnePhotoPageModule {}
