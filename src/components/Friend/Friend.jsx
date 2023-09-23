import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h1 className="text-4xl">Friend</h1>
      <p>has: {gift}</p>
    </div>
  );
};

export default Friend;
