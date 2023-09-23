import PropTypes from "prop-types";
import Friend from "../Friend/Friend";
const Cousine = ({ name }) => {
  return (
    <div>
      <h2 className="text-xl">Cousine</h2>
      <p className="text-4xl">{name}</p>

      {name === "Hasan" && <Friend></Friend>}
    </div>
  );
};

Cousine.propTypes = {
  name: PropTypes.string,
};
export default Cousine;
