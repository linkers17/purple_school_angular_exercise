import { Component } from '@angular/core';
import { IMenu, MENU_CONST } from '../../../shared/const/menu-items.const';
import { MenuButtonComponent } from '../../../shared/components/menu-button/menu-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MenuButtonComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
})
export class MenuComponent {
  public menuList: IMenu[] = MENU_CONST
}
