import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RatingFillDirective } from '../../../shared/directives/rating-fill.directive';

@Component({
  selector: 'app-rating',
  imports: [
    NgOptimizedImage,
    RatingFillDirective
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  standalone: true,
})
export class RatingComponent {
  @Input() rating: number = 0

  public stars: any[] = new Array(5)
}
