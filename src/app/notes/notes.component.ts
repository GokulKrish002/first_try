import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../note.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  addNote(): void {
    const title = prompt('Enter note title');
    const content = prompt('Enter note content');
    if (title && content) {
      this.noteService.addNote(title, content);
      this.notes = this.noteService.getNotes(); // Update the notes list
    }
    console.log(this.notes);
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
    this.notes = this.noteService.getNotes(); // Update the notes list
    console.log(this.notes);
  }
}
