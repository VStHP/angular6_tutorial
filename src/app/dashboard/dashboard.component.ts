import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mostViewMovies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMostViewMovie();
  }

  getMostViewMovie() {
    this.movieService.getMovies().subscribe(movies => this.mostViewMovies = movies.slice(0,3));
  }

}
