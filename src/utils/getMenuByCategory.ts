import menu from '../database/menu.json';

export const getMenuByCategory = (categoria: string) => {
  switch (categoria) {
    case 'principais':
      return menu.principais;
    case 'sobremesas':
      return menu.sobremesas;
    case 'bebidas':
      return menu.bebidas;
    default:
      return [];
  }
};
