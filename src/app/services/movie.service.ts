import { Injectable } from '@angular/core';
import { listMovies } from '../movies/template_data';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    this.messageService.add(`Get Movies at: ${new Date().toLocaleString()}`);
    console.log(this.messageService.messages);
    return of(listMovies);
  }

  getMovieById(id: number): Observable<Movie> {
    return of(listMovies.find(movie => movie.id === id));
  }
}
