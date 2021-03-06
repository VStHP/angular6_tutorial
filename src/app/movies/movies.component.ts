import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { listMovies } from './template_data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  title = 'List Movies'
  movies = listMovies

  constructor() { }

  ngOnInit() {
  }

  selectMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectMovie = movie;
    console.log(`select: ${JSON.stringify(this.selectMovie)}`);
  }

}
