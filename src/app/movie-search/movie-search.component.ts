import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<Movie[]>;
  private searchSubject = new Subject<string>();
  constructor(private movieService: MovieService) { }
  search(searchedString: string): void {
    console.log(`searchedString: ${searchedString}`);
    this.searchSubject.next(searchedString);
  }

  ngOnInit() {
    this.movies$ = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString: string) => this.movieService.searchMovie(searchedString))
    );
  }

}
