// const tracks = [
//   {
//     id: 1,
//     title: 'The Gift of Guilt',
//     artist: 'Gojira',
//     imageUrl:
//       'https://i.pinimg.com/originals/5d/79/77/5d7977ed56ff0737012585a0f7b96dca.jpg',
//     url: require('../assets/music/Gojira-TheGiftOfGuilt.mp3'),
//     duration: 351,
//   },
//   {
//     id: 2,
//     title: 'Per Aspera Ad Astra',
//     artist: 'Haggard',
//     imageUrl:
//       'https://i.pinimg.com/originals/af/9e/25/af9e253a1814c4ffc03e6f521a9dae44.jpg',
//     url: require('../assets/music/PerAsperaAdAstra.mp3'),
//     duration: 401,
//   },
//   {
//     id: 3,
//     title: 'Eclipse',
//     artist: 'Pink Floyd',
//     imageUrl:
//       'https://i.pinimg.com/originals/d9/10/7c/d9107c17987f20f8a3d910b8c6193397.jpg',
//     url: require('../assets/music/Eclipse.mp3'),
//     duration: 132,
//   },
//   {
//     id: 4,
//     title: 'Mutter',
//     artist: 'Rammstein',
//     imageUrl:
//       'https://i.pinimg.com/originals/88/74/2f/88742f686cba6f84e6aa9e2014d2eb04.jpg',
//     url: require('../assets/music/Rammstein-Mutter.mp3'),
//     duration: 227,
//   },
//   {
//     id: 5,
//     title: 'Demolisher',
//     artist: 'Slaughter to Prevail',
//     imageUrl:
//       'https://i.pinimg.com/originals/ed/34/26/ed34261633b63d37763fab7cf72b2143.png',
//     url: require('../assets/music/SlaughterToPrevail-DEMOLISHER.mp3'),
//     duration: 219,
//   },
//   {
//     id: 6,
//     title: 'Endless',
//     artist: 'Thurisaz',
//     imageUrl:
//       'https://i.pinimg.com/1200x/d5/7f/e8/d57fe890191d9c29c559471fa59b003c.jpg',
//     url: require('../assets/music/Thurisaz-Endless.mp3'),
//     duration: 332,
//   },
// ];

const artists = [
  {
    id: 1,
    name: 'Gojira',
    imageUrl:
      'https://i.pinimg.com/originals/63/84/ed/6384ed69282fc80bd5536a391f49913d.jpg',
    tracks: [
      {
        id: 1,
        title: 'The Gift of Guilt',
        imageUrl:
          'https://i.pinimg.com/originals/5d/79/77/5d7977ed56ff0737012585a0f7b96dca.jpg',
        url: require('../assets/music/Gojira-TheGiftOfGuilt.mp3'),
        duration: 351,
      },
      {
        id: 2,
        title: 'Flying Whales',
        imageUrl:
          'https://i.pinimg.com/originals/5d/79/77/5d7977ed56ff0737012585a0f7b96dca.jpg',
        url: require('../assets/music/FlyingWhales.mp3'),
        duration: 464,
      },
      {
        id: 3,
        title: 'Silvera',
        imageUrl:
          'https://i.pinimg.com/originals/5d/79/77/5d7977ed56ff0737012585a0f7b96dca.jpg',
        url: require('../assets/music/Gojira-Silvera.mp3'),
        duration: 351,
      },
      {
        id: 4,
        title: 'Sphinx',
        imageUrl:
          'https://i.pinimg.com/originals/5d/79/77/5d7977ed56ff0737012585a0f7b96dca.jpg',
        url: require('../assets/music/Gojira-Sphinx.mp3'),
        duration: 351,
      },
      {
        id: 5,
        title: 'Stranded',
        imageUrl:
          'https://i.pinimg.com/originals/5d/79/77/5d7977ed56ff0737012585a0f7b96dca.jpg',
        url: require('../assets/music/Gojira-Stranded.mp3'),
        duration: 351,
      },
    ],
  },
  {
    id: 2,
    name: 'Haggard',
    imageUrl:
      'https://i.pinimg.com/originals/2e/dc/da/2edcda79b8d2cf9f89f91d2d16f3d82b.jpg',
    tracks: [
      {
        id: 22,
        title: 'Per Aspera Ad Astra',
        imageUrl:
          'https://i.pinimg.com/originals/af/9e/25/af9e253a1814c4ffc03e6f521a9dae44.jpg',
        url: require('../assets/music/PerAsperaAdAstra.mp3'),
        duration: 401,
      },
      {
        id: 23,
        title: 'Herr Mannelig',
        imageUrl:
          'https://i.pinimg.com/originals/af/9e/25/af9e253a1814c4ffc03e6f521a9dae44.jpg',
        url: require('../assets/music/HerrMannelig.mp3'),
        duration: 401,
      },
      {
        id: 24,
        title: 'Awaking The Centuries',
        imageUrl:
          'https://i.pinimg.com/originals/af/9e/25/af9e253a1814c4ffc03e6f521a9dae44.jpg',
        url: require('../assets/music/Haggard-AwakingTheCenturies.mp3'),
        duration: 401,
      },
    ],
  },
  {
    id: 3,
    name: 'Pink Floyd',
    imageUrl:
      'https://i.pinimg.com/originals/35/04/ed/3504ed1413967bb1b9a0d41aca54304c.jpg',
    tracks: [
      {
        id: 34,
        title: 'Eclipse',
        imageUrl:
          'https://i.pinimg.com/originals/d9/10/7c/d9107c17987f20f8a3d910b8c6193397.jpg',
        url: require('../assets/music/Eclipse.mp3'),
        duration: 132,
      },
    ],
  },
  {
    id: 4,
    name: 'Rammstein',
    imageUrl:
      'https://i.pinimg.com/originals/fd/bc/23/fdbc23b290bdd59394712e52963ad4eb.jpg',
    tracks: [
      {
        id: 45,
        title: 'Mutter',
        imageUrl:
          'https://i.pinimg.com/originals/88/74/2f/88742f686cba6f84e6aa9e2014d2eb04.jpg',
        url: require('../assets/music/Rammstein-Mutter.mp3'),
        duration: 227,
      },
    ],
  },
  {
    id: 5,
    name: 'Slaughter to Prevail',
    imageUrl:
      'https://i.pinimg.com/originals/ed/34/26/ed34261633b63d37763fab7cf72b2143.png',
    tracks: [
      {
        id: 56,
        title: 'Demolisher',
        imageUrl:
          'https://i.pinimg.com/originals/ed/34/26/ed34261633b63d37763fab7cf72b2143.png',
        url: require('../assets/music/SlaughterToPrevail-DEMOLISHER.mp3'),
        duration: 219,
      },
    ],
  },
  {
    id: 6,
    name: 'Thurisaz',
    imageUrl:
      'https://i.pinimg.com/1200x/d5/7f/e8/d57fe890191d9c29c559471fa59b003c.jpg',
    tracks: [
      {
        id: 66,
        title: 'Endless',
        imageUrl:
          'https://i.pinimg.com/1200x/d5/7f/e8/d57fe890191d9c29c559471fa59b003c.jpg',
        url: require('../assets/music/Thurisaz-Endless.mp3'),
        duration: 332,
      },
    ],
  },
];

export default artists;
// export default tracks;
