import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: 'Harry Potter',
    release_year: 2001
  }
  title = 'Detail movie'

  constructor() { }

  ngOnInit() {
  }

}
