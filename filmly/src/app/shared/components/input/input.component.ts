import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrl: 'input.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
  ],
})
export class InputComponent {
  @Input() type: 'text' | 'email' = 'text'
  @Input() placeholder = '';
  @Input() iconUrl: string | null = null;
  @Input() value: string | null = null

  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>()

  public onInput(value: string | null): void {
    this.controlValue.emit(value)
  }
}
