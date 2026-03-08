import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ButtonComponent,
    InputComponent,
    PasswordInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  private router: Router = inject(Router)
  public handleLogin(): void {
    this.router.navigate(['/private'])
  }
}
