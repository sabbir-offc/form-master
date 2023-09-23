import PropTypes from "prop-types";
const Cousine = ({ name }) => {
  return (
    <div>
      <h2 className="text-4xl">Cousine</h2>
      <p>{name}</p>
    </div>
  );
};

Cousine.propTypes = {
  name: PropTypes.string,
};
export default Cousine;
