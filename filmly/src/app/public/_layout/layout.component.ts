import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NgOptimizedImage } from '@angular/common';
import { InputComponent } from '../../shared/components/input/input.component';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input.component';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrl: 'layout.component.scss',
  standalone: true,
  imports: [
    ButtonComponent,
    NgOptimizedImage,
    InputComponent,
    PasswordInputComponent
  ]
})
export class LayoutComponent {
  public handleClick(event: MouseEvent): void {
    console.log('handleClick', event)
  }
}
