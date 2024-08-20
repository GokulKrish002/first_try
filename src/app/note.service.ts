import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private idCounter = 0;

  constructor() { }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(title: string, content: string): void {
    this.notes.push({ id: this.idCounter++, title, content });
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
