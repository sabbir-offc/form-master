import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1 className="text-5xl">Aunty</h1>
      <section className="flexx">
        <Cousine name={"Mejba"}></Cousine>
        <Cousine name={"Hasan"}></Cousine>
      </section>
      <p>Money: {money}</p>
      <button
        className="btn btn-info"
        onClick={() => {
          setMoney(money + 1000);
        }}
      >
        Add 1000 Money
      </button>
    </div>
  );
};

export default Aunty;
