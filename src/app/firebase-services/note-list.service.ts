import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  firestore: Firestore = inject(Firestore);

  constructor() { }


      // const itemCollection = collection(this.firestore, 'items');


      getNotesRef(){
        return collection(this.firestore, 'notes');
      }

      getTrashRef(){
        return collection(this.firestore, 'items');
      }




}