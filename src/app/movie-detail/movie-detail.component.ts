import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  detailMovie: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  getMovieDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id).subscribe(movie => this.detailMovie = movie );
  }

}
