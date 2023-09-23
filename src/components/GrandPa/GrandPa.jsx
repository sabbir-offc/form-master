import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const GrandPa = () => {
  return (
    <div className="grandpa">
      <h2 className="text-4xl text-center">GrandPa</h2>
      <section className="flexx">
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default GrandPa;
