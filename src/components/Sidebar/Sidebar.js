import React, { useEffect, useState } from "react";
import redes from '../../assets/redes sociales.jpg'
import negocios from '../../assets/negocios.jpg'

const Sidebar = () => {
  const [informacion, setInformacion] = useState([]);
  const consultarApi = async () => {
    const api = await fetch(
      "http://hp-api.herokuapp.com/api/characters/students"
    );
    const data = await api.json();
    console.log("inf", data[0]);
    setInformacion(data[0]);
  };

  useEffect(() => {
    consultarApi();
  }, []);
  // console.log("informacion", informacion);
  return (
    <div className="md:w-4/12 my-4">
      <fieldset className="border-gray-600 border rounded-lg px-5 shadow-xl mb-10">
        <legend className=" mb-10 text-2xl font-semibold text-gray-800">
          Registrate
        </legend>
        <form action="" className="px-15 m7-20 pb-10">
          <div className="mb-2">
            <label
              className="text-gray-700 mb-4 text-lg tracking-tight font-bold"
              htmlFor="name"
            >
              Nombre
            </label>

            <input
              className="w-full text-gray-600 border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
              name="name"
              type="text"
              id="name"
            // value={informacion.name}
            />
          </div>
          <div className="mb-2">
            <label
              className="text-gray-700 mb-4 text-lg tracking-tight font-bold"
              htmlFor="name"
            >
              Whassatp
            </label>

            <input
              className="w-full text-gray-600 border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
              name="name"
              type="text"
              id="name"
            // value={informacion.dateOfBirth}
            />
          </div>
          <div className="mb-2">
            <label
              className="text-gray-700 mb-4 text-lg tracking-tight font-bold"
              htmlFor="name"
            >
              Correo Electrónico
            </label>

            <input
              className="w-full text-gray-600 border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
              name="name"
              type="text"
              id="name"
            // value={informacion.house}
            />
          </div>
          <div className="mb-2">
            <select name="" id="" className="text-gray-600 w-full p-3">
              <option value="">Tipo de Negocio</option>
            </select>
          </div>

          <button
            type="button"
            className="w-full my-5 bg-blue-500 mt-10 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Enviar
          </button>
        </form>
      </fieldset>
      <div className="border   px-2 md:px-4 md:mt-32 pb-10">
        <h4 className="text-xl font-semibold text-gray-800 mt-10 mb-3 ">
          Fijamos las pautas y directrices para optimizar el aprovechamiento de
          las cuentas en las redes
        </h4>
        <p className="text-gray-600 text-left md:text-xl mb-2">Establecemos las características de los artículos</p>
        <img src={redes} alt="" className="my-4"/>
        <h4 className="text-xl font-semibold text-gray-800 mt-10 mb-3">Realizamos tele marketing de salida y de entrada</h4>
        <p className="text-gray-600 text-left md:text-xl">
          Monetizar las acciones en la web y las cuentas en las redes sociales
        </p>
        <img src={negocios} alt="" className="my-4"/>
      </div>
    </div>
  );
};

export default Sidebar;
