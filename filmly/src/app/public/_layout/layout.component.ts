import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrl: 'layout.component.scss',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterOutlet
  ]
})
export class PublicLayoutComponent {

}
