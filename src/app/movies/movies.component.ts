import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  title = 'List Movies'
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      (followMovie) => { this.movies = followMovie }
    );
  }

  // selectMovie: Movie;
  // onSelect(movie: Movie): void {
  //   this.selectMovie = movie;
  //   console.log(`select: ${JSON.stringify(this.selectMovie)}`);
  // }

}
