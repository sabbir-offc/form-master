import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = () => {
  return (
    <div>
      <h3 className="text-5xl">Father</h3>
      <section className=" flexx">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
