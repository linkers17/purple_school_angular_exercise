import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GENRES, IGenre } from '../../shared/const/genres.const';

@Component({
  selector: 'app-layout',
  imports: [
    MenuComponent,
    NgOptimizedImage,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
})
export class PrivateLayoutComponent {
  public genres: IGenre[] = GENRES
}
