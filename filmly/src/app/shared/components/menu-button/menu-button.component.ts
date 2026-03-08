import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-menu-button',
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
  standalone: true,
})
export class MenuButtonComponent {
  @Input() text = ''
  @Input() iconUrl = ''
  @Input() iconUrlActive = ''
  @Input() disabled = false

  @Output() clicked: EventEmitter<PointerEvent> = new EventEmitter<PointerEvent>()

  public type = 'button'
  public isActive = false

  public handleClick(event: PointerEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event)
    }
  }
}
