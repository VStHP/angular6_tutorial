import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-start';
  movies;

  // constructor(private http: Http){
  //   http.get('http://localhost:3000/movies.json')
  //       .subscribe(res => this.movies = res.json());
  // }
}
