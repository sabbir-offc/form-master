import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);
const GrandPa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond Ring";
  return (
    <div className="grandpa">
      <h2 className="text-4xl text-center">GrandPa</h2>
      <p>GrandFather's Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flexx">
            <Father asset={asset}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
