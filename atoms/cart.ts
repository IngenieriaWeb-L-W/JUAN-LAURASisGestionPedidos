import { atom } from 'jotai';

const products = [


   {
     id: 1,
     name: 'Pasa montanas',
     description: 'Gorro color gris en lana con logo bordado .',
     rating: 2.5,
     image: 'https://instagram.feoh5-1.fna.fbcdn.net/v/t51.29350-15/314624183_607109797829430_2737960182027134013_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTcweDIwODAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.feoh5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=xKWD_VU5bDYQ7kNvgEYPp4H&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=Mjk3MDI5NDA1Nzk5MzEyMzExNQ%3D%3D.2-ccb7-5&oh=00_AYB1u2FVi5Q8lxS5MnnroP7cc6Y3wkSlCaJJZ98U97blHg&oe=66585741&_nc_sid=cf751b',
     price: 100,
   },
   {
     id: 2,
     name: 'Gorra plana con logo bordado',
     description: 'Gorra plana con mucho estilo, logo bordado en frente con regulador para ajustar a tu cabeza.',
     rating: 3.7,
     image: 'https://scontent-lhr6-1.cdninstagram.com/v/t51.29350-15/315323488_210428198004122_6420070779098602906_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTcweDIwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=102&_nc_ohc=JC5-UVlqmicQ7kNvgEleqd1&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3MDI5NDA3MTYzMjkwNjAyNw%3D%3D.2-ccb7-5&oh=00_AYAXkZnJevgW_-3GIqIkgFfWm85Mns0v9j5B5I4fTAb9UQ&oe=665E6F44&_nc_sid=10d13b',
     price: 1500,
   },
   {
     id: 3,
     name: 'Gorra redonda con logo bordado',
     description:
       'Gorra redonda con un estilo mas sobrio, logo bordado en frente con regulador para ajustar a tu cabeza.',
     rating: 1.8,
     image: 'https://scontent-lhr6-2.cdninstagram.com/v/t51.29350-15/315227307_854854529004329_7618622979335434248_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTcweDIwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=7WyECQntOkoQ7kNvgEx5RFC&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3MDI5NDA2ODE4NTE4MzQyMA%3D%3D.2-ccb7-5&oh=00_AYCb7pKL2qEEEBFjCVfJWw4G89XMw_WevktSjpeFRbmV2Q&oe=665E824A&_nc_sid=10d13b',
     price: 200,
   },
   {
     id: 4,
     name: 'Auriculares Bluetooth',
      description:
       'Auriculares Bluetooth con cancelación de ruido para una experiencia auditiva inmersiva.',
     rating: 0.6,
     image: 'https://via.placeholder.com/150',
     price: 2350,
   },
   {
     id: 5,
     name: 'Smartwatch',
     description:
       'Mantente conectado y monitoriza tu actividad física con nuestro smartwatch de última tecnología.',
     rating: 4.4,
     image: 'https://via.placeholder.com/150',
     price: 1400,
   },
 ]; 

 export const productsAtom = atom(products);
 export const cartAtom = atom([]);