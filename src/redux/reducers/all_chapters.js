const initialState = [
  {
    id: 1,
    title: 'Capitulo 1 de Tananana',
    number: 1,
    comic_id: 1,
    images: [{
      order: 0,
      path: '/badabacon/app_test__0_A1.jpg',
    },
    {
      order: 1,
      path: '/badabacon/app_test__1_A2.jpg',
    },
    {
      order: 2,
      path: '/badabacon/app_test__2_A3.jpg',
    },
    {
      order: 3,
      path: '/badabacon/app_test__3_A4.jpg',
    },
    {
      order: 4,
      path: '/badabacon/app_test__4_A5.jpg',
    },
    {
      order: 5,
      path: '/badabacon/app_test__5_A6.jpg',
    },
    {
      order: 6,
      path: '/badabacon/app_test__6_A7.jpg',
    },
    {
      order: 7,
      path: '/badabacon/app_test__7_A8.jpg',
    }],
  },
];

const allChaptersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default allChaptersReducer;
