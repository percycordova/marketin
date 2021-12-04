import React, { useEffect, useState } from 'react'

const Sidebar = () => {
  const [informacion, setInformacion] = useState([])
  const consultarApi = async () => {
    const api = await fetch('http://hp-api.herokuapp.com/api/characters/students')
    const data = await api.json()
    console.log('inf', data[0])
    setInformacion(data[0])
  }


  useEffect(() => {
    consultarApi()
  }, [])
  console.log('informacion', informacion)
  return (
    <div className="md:w-3/12 my-4">
      <form action="" className="px-15 m7-20">
        <p className=" mb-10 text-2xl font-semibold text-gray-800">Registrate</p>
        <div className="mb-2">
          <label
            className="text-gray-700 mb-4 text-lg tracking-tight font-bold"
            htmlFor="name"
          >Nombre</label>

          <input
            className="w-full text-gray-600 border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
          value={informacion.name}
          />
        </div>
        <div className="mb-2">
          <label
            className="text-gray-700 mb-4 text-lg tracking-tight font-bold"
            htmlFor="name"
          >Whassatp</label>

          <input
            className="w-full text-gray-600 border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            value={informacion.dateOfBirth}
          />
        </div>
        <div className="mb-2">
          <label
            className="text-gray-700 mb-4 text-lg tracking-tight font-bold"
            htmlFor="name"
          >Correo Electrónico</label>

          <input
            className="w-full text-gray-600 border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            value={informacion.house}
          />
        </div>
        <div className="mb-2">
          <select name="" id="" className="text-gray-600 w-full p-3">
            <option value="">Tipo de Negocio</option>
          </select>
        </div>

        <button type="button" className="w-full my-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Enviar
        </button>
      </form>
      <div className="my-10">
      <h2 className="text-3xl font-bold my-4">Beneficios para tu negocio</h2>
        <p className="my-4">Tranformacion digital e implementacion</p>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo. A, provident earum.</p>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo. A, provident earum.</p>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo. A, provident earum.</p>
      </div>
      <div className="my-10">
      <h2 className="text-3xl font-bold my-4">Beneficios para tu negocio</h2>
        <p className="my-4">Tranformacion digital e implementacion</p>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo. A, provident earum.</p>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo. A, provident earum.</p>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing repellendus illo. A, provident earum.</p>
      </div>
    </div>
  )
}

export default Sidebar
