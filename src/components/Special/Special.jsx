import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h1 className="text-4xl">Special</h1>
      <p>has: {asset}</p>
      <p>also has: {gift}</p>
    </div>
  );
};

export default Special;
