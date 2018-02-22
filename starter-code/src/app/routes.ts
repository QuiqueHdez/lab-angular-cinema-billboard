
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MovieComponentComponent } from "./movie-component/movie-component.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id', component: MovieComponentComponent }
];
