import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

export enum EPasswordInputIcons {
  OPENED = '/images/icons/eye-opened.svg',
  CLOSED = '/images/icons/eye-closed.svg',
}

@Component({
  selector: 'app-password-input',
  templateUrl: 'password-input.component.html',
  styleUrl: 'password-input.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ]
})
export class PasswordInputComponent {
  @Input() type: 'text' | 'password' = 'password';
  @Input() placeholder = '';
  @Input() iconUrl: string | null = null;
  @Input() value: string | null = null;

  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>()

  public buttonIcon: EPasswordInputIcons = EPasswordInputIcons.CLOSED

  public onButtonToggleClick(): void {
    if (this.type === 'password') {
      this.type = 'text'
      this.buttonIcon = EPasswordInputIcons.OPENED
    } else {
      this.type = 'password'
      this.buttonIcon = EPasswordInputIcons.CLOSED
    }
  }

  public onInput(value: string | null): void {
    this.controlValue.emit(value)
  }
}
