import Activities from "./components/Activities";
import Career from "./components/Career";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Chaedle from "./components/project/Chaedle";
import ChaedleAdmin from "./components/project/ChaedleAdmin";
import VidosW from "./components/project/vidosw";
import VidosW_Admin from "./components/project/VidosWAdmin";
import TechStack from "./components/TechStack";
import "./global.css";

function App() {
  return (
    <div className="flex justify-center px-6 py-6 w-full flex-col">
      <Introduction />
      <Divider />

      <TechStack />
      <Divider />

      <Career />
      <Divider />

      <h2 className="text-2xl font-semibold mb-2 text-slate-700">프로젝트</h2>
      <VidosW />
      <VidosW_Admin />
      <ChaedleAdmin />
      <Chaedle />
      <Divider />

      <Activities />

      <Footer />
    </div>
  );
}

export default App;
