import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import plan_ventas from "./assets/plan ventas.gif";

function App() {
  return (
    <div className="px-4 md:px-10">
      <Header />
      <Banner />
      <div className="flex flex-col md:flex-row  ">
        <Main />
        <Sidebar />
      </div>
      <div className="w-full mt-10 ">
        <h2 className="text-2xl font-bold text-gray-800  text-center  ">
          Plan de ventas
        </h2>
        <article
          className="md:my-10 text-center flex-col md:flex-row md:gap-y-10 flex justify-center items-center"
          id="plan-ventas"
        >
          <div className="md:w-1/2">
            <ul className="list-disc pl-8">
              <li className="text-gray-700 text-left md:text-xl my-8">
                fijamos las pautas y directrices para optimizar el
                aprovechamiento de las cuentas en las redes
              </li>
              <li className="text-gray-700 text-left md:text-xl my-8">
                Establecemos las características de los artículos
              </li>
              <li className="text-gray-700 text-left md:text-xl my-8">
                Realizamos tele marketing de salida y de entrada
              </li>

              <li className="text-gray-700 text-left md:text-xl my-8">
                Monetizar las acciones en la web y las cuentas en las redes
                sociales
              </li>
              <li className="text-gray-700 text-left md:text-xl my-8">
                Evaluación de los resultados: diario, semanal y mensual
              </li>
            </ul>
          </div>

          <div className="my-4 mx-auto md:w-1/2">
            <img src={plan_ventas} alt="" className="" />
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
              <p className="text-black font-bold text-base md:ml-14 md:text-2xl">
                $2.979.000 pesos. (Anual)
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}

export default App;
