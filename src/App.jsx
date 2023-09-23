import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  return (
    <>
      <h1 className="text-5xl mb-4">Vite + React</h1>
      <GrandPa></GrandPa>
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReusableForm></ReusableForm> */}
    </>
  );
}

export default App;
