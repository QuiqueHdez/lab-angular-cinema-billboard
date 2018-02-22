import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  movies: any
  constructor(public movieSample: MovieService, public router: Router) {
    this.movies = this.movieSample.getMovies()
  }

  ngOnInit() {
  }
  goToMovie(id) {
    this.router.navigate(['/movie', id]);
  }

}
