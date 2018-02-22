import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  id: number;
  movie: any;

  constructor(private route: ActivatedRoute, private MovieService: MovieService) {
    this.route.params.subscribe(p => {
      this.id = p.id;

    })
  }
  ngOnInit() {
    this.movie = this.MovieService.getMovie(this.id);
    console.log(this.movie)
  }
}