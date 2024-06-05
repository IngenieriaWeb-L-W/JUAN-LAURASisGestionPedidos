import { atom } from 'jotai';

const products = [
  {
    id: 18,
    name: 'VERY',
    price: 221,
    description:
      'Attention establish respond hundred future whom. Western baby now perform stuff wish.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 707,
    name: 'PER',
    price: 181,
    description:
      'Reach safe television control. Need information area weight impact test trade. From describe back these not marriage.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 447,
    name: 'LEAST',
    price: 79,
    description: 'Bit example start left cause sister stop. Voice role building type seven.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 940,
    name: 'RACE',
    price: 338,
    description:
      'Indicate church trip admit visit visit movement. Some down he real chair white produce.\nPolitics along young.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 321,
    name: 'JUST',
    price: 61,
    description:
      'How sister language someone century deal. Toward themselves who budget. Maintain project southern likely.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 504,
    name: 'POLITICAL',
    price: 477,
    description:
      'Camera eye single operation hotel. Hard thousand ready first. Oil behavior church prepare eat.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 670,
    name: 'CONTINUE',
    price: 47,
    description:
      'Sure according policy break husband people.\nGarden race southern. Catch break long man notice.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 833,
    name: 'POWER',
    price: 99,
    description: 'Raise wide kind. Magazine southern right base.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 892,
    name: 'EAST',
    price: 190,
    description: 'Similar follow bring indeed option.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 90,
    name: 'DETAIL',
    price: 477,
    description: 'Trouble I use be color interest. Nation plant piece out war consumer.',
    image: 'https://dummyimage.com/133x631',
  },
];

export const productsAtom = atom(products);
export const cartAtom = atom([]);
