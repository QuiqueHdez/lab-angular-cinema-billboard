import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { MovieService } from './services/movie.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
