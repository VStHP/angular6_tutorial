import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  title = 'List Movies'
  movies: Movie[];
  newMovie: Movie;

  constructor(
    private movieService: MovieService,
    public toast: ToastrManager
    ) { }

  ngOnInit() {
    this.newMovie = new Movie();
    this.movieService.getMovies().subscribe(
      (followMovie) => { this.movies = followMovie }
    );
  }

  create(): void {
    this.movieService.createMovie(this.newMovie).subscribe(
      res => {
        if(res['id']){
          this.movies.push(res);
          this.toast.successToastr("Create Movie success!");
        }else{
          this.toast.errorToastr("Create Movie failed!");
        }
      }
    );
  }

  delete(id: number): void {
    this.movieService.deleteMovie(id).subscribe(any => {
      if(any['status'] == 200){
        this.movies = this.movies.filter(eachMovie => eachMovie.id != id);
        this.toast.successToastr("Deleted Movie success!");
      }else{
        this.toast.errorToastr("Deleted Movie failed!");
      }
    });
  }

  // selectMovie: Movie;
  // onSelect(movie: Movie): void {
  //   this.selectMovie = movie;
  //   console.log(`select: ${JSON.stringify(this.selectMovie)}`);
  // }

}
