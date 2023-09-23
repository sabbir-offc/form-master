import Cousine from "../Cousine/Cousine";

const Uncle = () => {
  return (
    <div>
      <h3 className="text-5xl">Uncle</h3>
      <section className="flexx">
        <Cousine name={"Rafsan"}></Cousine>
        <Cousine name={"Sohana"}></Cousine>
      </section>
    </div>
  );
};

export default Uncle;
