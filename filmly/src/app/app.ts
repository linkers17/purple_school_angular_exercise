import { Component } from '@angular/core';
import { LayoutComponent } from './public/_layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    LayoutComponent,
  ],
})
export class App {}
