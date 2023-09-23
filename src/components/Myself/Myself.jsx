import Special from "../Special/Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h1 className="text-3xl">MySelf</h1>
      <section className="flexx">
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Myself;
