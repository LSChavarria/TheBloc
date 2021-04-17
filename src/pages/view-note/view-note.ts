import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteService } from "../../providers/note-service/note-service";
import { Note } from "../../models/note.model";
import { EditNotePage } from '../edit-note/edit-note';

@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number) {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }
  
  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n)=>{
      this.note = n;
      this.navCtrl.push(EditNotePage, { note: this.note })
    })
    this.navCtrl.pop();
  }

}
