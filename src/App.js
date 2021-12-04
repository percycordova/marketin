import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <div className="px-4 md:px-10">
      <Header/>
      <Banner/>
      <div className="flex flex-col md:flex-row mt-10" id="home">
        <Main />
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
