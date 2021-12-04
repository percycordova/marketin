import React from "react";
import ventas from '../../assets/ventas.jpg'
const Main = () => {
  return (
    <div className="md:w-9/12 md:px-8 " >
      <main className="" >
        <h2 className="text-2xl font-bold text-gray-800 my-4 " >Beneficios para tu negocio</h2>
        <p className="text-gray-600 text-left md:text-xl my-8" >
          Transformación digital e implementación Diagnóstico de la producción y
          ventas Establecer objetivos de monetización Estrategia de mercadeo
          digital y publicidad Plan de ventas, seguimiento y cierre.
        </p>

        <div className="my-4 mx-auto" >
          <img
            src={ventas}
            alt=""
            className=""
          />
        </div>
      </main>
      <article>
        <h2 className="text-3xl font-bold my-8">
          Transformacion digital e implementacion
        </h2>
        <p className="my-4">Tranformacion digital e implementacion</p>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo.
          A, provident earum.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo.
          A, provident earum.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo.
          A, provident earum.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo.
          A, provident earum.
        </p>
      </article>
    </div>
  );
};

export default Main;
