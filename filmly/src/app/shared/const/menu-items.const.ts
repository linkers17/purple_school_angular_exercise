export interface IMenu {
  text: string,
  iconUrl: string,
  iconUrlActive: string,
  link: string,
  id: number,
}

export const MENU_CONST: IMenu[] = [
  {
    text: 'Главная',
    iconUrl: 'images/menu/home.svg',
    iconUrlActive: 'images/menu/home-active.svg',
    link: '/private/home',
    id: 1,
  },
  {
    text: 'Избранное',
    iconUrl: 'images/menu/favorites.svg',
    iconUrlActive: 'images/menu/favorites-active.svg',
    link: '/private/favorites',
    id: 2,
  },
]
