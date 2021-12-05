import React from "react";
import ventas from "../../assets/ventas.jpg";
const Main = () => {
  return (
    <main className="md:w-8/12 md:px-8 min-h-screen mt-30">
      <article className="" id="beneficios">
        <h2
          className="text-2xl font-bold text-gray-800 my-4 "
          style={{ fontFamily: " Merriweather, serif;" }}
        >
          Beneficios para tu negocio
        </h2>
        <p className="text-gray-600 text-left md:text-xl my-8 ">
          Transformación digital e implementación Diagnóstico de la producción y
          ventas Establecer objetivos de monetización Estrategia de mercadeo
          digital y publicidad Plan de ventas, seguimiento y cierre.
        </p>

        <div className="my-4 mx-auto">
          <img src={ventas} alt="" className="" />
        </div>
      </article>
      <article className="my-10" id="transformacion-digital">
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-8  ">
          Transformación digital e implementación
        </h2>
        <ul className="list-disc pl-8">
          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Diagnóstico o creación del sitio web
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              Nuestro equipo de diseñadores, comunicadores y programadores ,
              trabajan para desarrollar su sitio web acorde con los lineamientos
              estipulados por Google.
            </span>
          </li>

          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Redes sociales
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              Ofrecémos el servicio de creación, administración y seguimiento de
              sus cuentas.
            </span>
          </li>

          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Pauta digital
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              Contamos con un equipo digital que realizará la creación de
              campañas digital para pautar en Google y de esta forma incrementar
              la venta de su mercancía en inventario
            </span>
          </li>

          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Email marketing
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              Envío de 20.000, correos personalizados a clientes potenciales.
            </span>
          </li>

          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Asistencia de ventas
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              Soporte de telemercadeo para cierre de ventas, y fidelización de
              clientes.
            </span>
          </li>
        </ul>

        <div className="my-4 mx-auto">
          <img src={ventas} alt="" className="" />
        </div>
      </article>
    </main>
  );
};

export default Main;
