import { atom } from 'jotai';

 const productos = [
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
     name: 'Camiseta Algodón Orgánico',
     description: 'Camiseta de alta calidad hecha con algodón 100% orgánico.',
     rating: 3.7,
     image: 'https://via.placeholder.com/150',
     price: 1500,
   },
   {
     id: 3,
     name: 'Cafetera Automática',
     description:
       'Disfruta del mejor café cada mañana con nuestra cafetera automática de última generación.',
     rating: 1.8,
     image: 'https://via.placeholder.com/150',
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

export const productsAtom = atom([productos]);