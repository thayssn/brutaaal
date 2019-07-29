/* eslint-disable global-require */

const initialState = [
  {
    id: 0,
    slug: 'ba-da-bacon',
    title: 'Ba-da-bacon',
    cover: require('../../assets/ba-da-bacon/cover-desktop.png'),
    coverMobile: require('../../assets/ba-da-bacon/cover-mobile.png'),
    logo: require('../../assets/ba-da-bacon/logo.png'),
    chapters: [{
      id: 1,
      title: 'Titulo de um capitulo mt grande, mesmo',
      number: 1,
    }],
  },
  {
    id: 1,
    slug: 'venha-a-nos-o-vosso-reino',
    title: 'Venha a nós o vosso reino',
    cover: require('../../assets/venha-a-nos-o-vosso-reino/cover-desktop.png'),
    coverMobile: require('../../assets/venha-a-nos-o-vosso-reino/cover-mobile.png'),
    logo: require('../../assets/venha-a-nos-o-vosso-reino/logo.png'),
    chapters: [],
  },
  {
    id: 2,
    slug: 'charlotte-blues',
    title: 'Charlotte Blues',
    cover: require('../../assets/charlotte-blues/cover-desktop.png'),
    coverMobile: require('../../assets/charlotte-blues/cover-mobile.png'),
    logo: require('../../assets/charlotte-blues/logo.png'),
    chapters: [],
  },
  {
    id: 3,
    slug: 'johnny-canivete',
    title: 'Johnny Canivete',
    cover: require('../../assets/johnny-canivete/cover-desktop.png'),
    coverMobile: require('../../assets/johnny-canivete/cover-mobile.png'),
    logo: require('../../assets/johnny-canivete/logo.png'),
    chapters: [],
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default booksReducer;
