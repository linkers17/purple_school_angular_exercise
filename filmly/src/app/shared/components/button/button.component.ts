import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Output() btnClick = new EventEmitter<MouseEvent>()
  public handleClick(event: MouseEvent) {
    this.btnClick.emit(event)
  }
}
