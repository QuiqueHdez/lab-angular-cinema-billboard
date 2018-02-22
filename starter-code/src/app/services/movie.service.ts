import { Injectable } from '@angular/core';
import { Seeds } from '../../sample-movies';

export interface Movies {
    id: number;
    title: string;
    poster: string;
    synopsis: string;
    genres: Array<string>;
    year: number;
    director: string;
    actors: Array<string>;
    hours: Array<string>;
    room: number;
}

@Injectable()
export class MovieService {
    private movies: Array<Movies> = Seeds;


    getMovies() {
        return this.movies;
    }

    constructor() { }

    getMovie(id) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].id == id) {
                return this.movies[i]
            }
        }
    }
}