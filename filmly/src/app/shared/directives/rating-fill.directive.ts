import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRatingFill]',
  standalone: true,
})
export class RatingFillDirective implements OnChanges {
  @Input('appRatingFill') ratingFill: number = 0

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes !== null && changes['appRatingFill'] !== null) {
      this._renderer.setStyle(this._el.nativeElement, 'width', `${this.ratingFill / 5 * 100}%`)
    }
  }
}
