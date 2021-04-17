import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from "../../models/note.model";
import { FormGroup, Validators, FormControl } from '@angular/forms';
/**
 * Generated class for the EditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
    this.note = this.navParams.get('note');
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    })
  }

  saveNote(note: Note) {
    this.noteService.deleteNote(this.note.createDate);
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }
}
