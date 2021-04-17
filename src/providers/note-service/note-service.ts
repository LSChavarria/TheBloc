import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';
import { Photo } from '../../models/photo';

@Injectable()
export class NoteService {
  private notes: Note[] = [];
  private note: Note;

  constructor(public storage: Storage) {}

  saveNote(note: Note){
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  getAllNotes() {
    return this.storage.get('notes').then(
      (notes)=> {
        this.notes = notes == null ? [] : notes;
        return [...this.notes];
      }
    )
  }

  getNote(createDate: number){
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(r => r.createDate === createDate);
      return this.note;
    });
  }

  deleteNote(createDate: number){
    this.notes = this.notes.filter((note)=> {
      return note.createDate !== createDate
    });
    this.storage.set('notes', this.notes);
  }

  //-----------------------------------------------------

  photos:Photo[]=[];
  private photo: Photo;

  savePhoto(photo: Photo){
    photo.createDate = Date.now();
    this.photos.push(photo);
    this.storage.set('photos',this.photos);
  }

  getAllPhotos() {
    return this.storage.get('photos').then(
      (photos)=> {
        this.photos = photos == null ? [] : photos;
        return [...this.photos];
      }
    )
  }
  
  getPhoto(createDate: number){
    return this.storage.get('photos').then((photos) => {
      this.photo = [...photos].find(r => r.createDate === createDate);
      return this.photo;
    });
  }

  deletePhoto(createDate: number){
    this.photos = this.photos.filter((photo)=> {
      return photo.createDate !== createDate
    });
    this.storage.set('photos', this.photos);
  }
}
