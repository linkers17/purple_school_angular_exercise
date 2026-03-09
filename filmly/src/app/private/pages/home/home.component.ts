import { Component } from '@angular/core';
import { IMovie } from '../../../shared/models/movie.model';
import { MOVIES } from '../../../shared/const/fake-films.const';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  public movies: IMovie[] = MOVIES
}
