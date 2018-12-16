import { Injectable } from '@angular/core';
import { listMovies } from '../movies/template_data';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(listMovies);
  }
}
