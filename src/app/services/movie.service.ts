import { Injectable } from '@angular/core';
import { listMovies } from '../movies/template_data';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
const headerOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private indexURL = 'http://localhost:3000/movies';
  private detailURL = 'http://localhost:3000/movies/';
  constructor(
    public messageService: MessageService,
    private httpClient: HttpClient
  ){}

  getMovies(): Observable<Movie[]> {
    // this.messageService.add(`Get Movies at: ${new Date().toLocaleString()}`);
    // console.log(this.messageService.messages);
    return this.httpClient.get<Movie[]>(this.indexURL).pipe(
      catchError(error => of([]))
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.detailURL + id).pipe()
  }

  updateMovie(movie: Movie): Observable<any> {
    const url = `${this.indexURL}/${movie.id}`;
    return this.httpClient.put(url, movie, headerOptions).pipe(
      tap(updatedMovie => console.log("Update success")),
      catchError(error => of(new Movie()))
    );
  }

  createMovie(movie: Movie): Observable<any> {
    return this.httpClient.post<Movie>(this.indexURL, movie, headerOptions).pipe(
      tap( createMovie => console.log("Create success")),
      catchError( error => of(error))
    );
  }

  deleteMovie(movieId: number): Observable<Movie> {
    return this.httpClient.delete<Movie>(this.detailURL + movieId).pipe(
      tap(deletedMovie => console.log(`Deleted movie id = ${deletedMovie.id}`)),
      catchError(error => of(null))
    );
  }

  searchMovie(value: string): Observable<Movie[]> {
    if(!value.trim()){
      return of([])
    }
    return this.httpClient.get<Movie[]>(`${this.indexURL}/search?value=${value}`).pipe(
      catchError(error => of([]))
    );
  }
}
