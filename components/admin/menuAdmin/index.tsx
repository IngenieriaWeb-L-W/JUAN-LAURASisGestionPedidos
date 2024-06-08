import Table from '@/components/admin/table';
import React from 'react';
import PrivateLayout from '@/components/PrivateLayout';
import prisma from '@/config/prisma';
import MenuAdmin from '@/components/admin/menuAdmin'
import router from 'next/router';


const Index = () =>  {

{/* <Table countProducts={countProducts} /> */}
//"bg-gray-800 p-40 text-white body-font"

  return (
    
    <div className="bg-gray-800"> 
      <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" 
              src="https://d1ih8jugeo2m5m.cloudfront.net/2023/10/ideas-para-tienda-de-ropa-infantil.jpg"/>
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Administrar productos</h2>
            <p className="leading-relaxed text-base">En esta sección podrás visualizar, crear, editar o borar PRODUCTOS como Administrador</p>
            <button onClick={() => router.push("admin/products")}
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Productos
            </button>
          </div>

          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" 
              src="https://global.tiffin.edu/img/article/que-es-la-experiencia-de-usuario-o-ux-ejemplos-reales.webp"/>
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Administrar usuarios</h2>
            <p className="leading-relaxed text-base">En esta sección podrás visualizar, crear, editar o borar los USUARIOS como Administrador</p>
            <button  className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          </div>

        </div>
      </div>
    </section>
  </div>
  )
}

export default Index

