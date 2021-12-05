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

      <article className="my-10" id="plan-ventas">
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-8  ">
          Plan de ventas
        </h2>
        <ul className="list-disc pl-8">
          <li className="text-gray-700 text-left md:text-xl my-8">
            fijamos las pautas y directrices para optimizar el aprovechamiento
            de las cuentas en las redes
          </li>
          <li className="text-gray-700 text-left md:text-xl my-8">
            Establecemos las características de los artículos
          </li>
          <li className="text-gray-700 text-left md:text-xl my-8">
            Realizamos tele marketing de salida y de entrada
          </li>

          <li className="text-gray-700 text-left md:text-xl my-8">
            Monetizar las acciones en la web y las cuentas en las redes sociales
          </li>
          <li className="text-gray-700 text-left md:text-xl my-8">
            Evaluación de los resultados: diario, semanal y mensual
          </li>
        </ul>

        <div className="my-4 mx-auto">
          <img src={ventas} alt="" className="" />
        </div>
      </article>
      {/* Adquiere Hoy */}
      <article className="my-10">
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-8  ">
          Inversión anual
        </h2>
        <div className="border py-6 px-4 shadow-md">
          <div className="flex flex-col md:flex-row w-100 items-center ">
            <p className="text-xl md:text-xl font-bold  text-gray-800 mr-10">
              ADQUIERA HOY
            </p>
            <p className="text-xl text-center my-2 text-gray-800 md:max-w-50   ">
              Plan corporativo, generador de nuevos clientes y ventas
            </p>
          </div>
          <div className="flex justify-between md:justify-start md:gap-x-10 mt-5 items-center">
            <p className="text-xl  font-bold  text-gray-800 md:text-2xl">
              Inversión:{" "}
            </p>
            <p className="text-black font-bold text-lg md:ml-14 md:text-2xl">
              $2.979.000 pesos. (Anual)
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
