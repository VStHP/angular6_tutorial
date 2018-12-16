import { Injectable } from '@angular/core';
import { listMovies } from '../movies/template_data';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return listMovies;
  }
}
