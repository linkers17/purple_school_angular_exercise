import { Component, Input } from '@angular/core';
import { IMovie } from '../../../shared/models/movie.model';
import { RatingComponent } from '../rating/rating.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    RatingComponent,
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
})
export class CardComponent {
  @Input() movie: IMovie | null = null

  public favoriteToggle(): void {
    if (this.movie) {
      if (this.movie.isFavorite) {
        console.log('movie remove favorite')
      } else {
        console.log('movie add favorite')
      }
    }
  }
}
