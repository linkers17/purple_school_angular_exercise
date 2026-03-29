import { Component } from '@angular/core';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';
import { IMovie } from '../../../shared/models/movie.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-favorites',
  imports: [
    CardComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  standalone: true,
})
export class FavoritesComponent {
  favorites: IMovie[] = FAVORITES
}
