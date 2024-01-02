import PropTypes from "prop-types";

import { womanCooking } from "../../images";

const CookingDirections = ({ recipeInfo }) => {
  const { strInstructions: directions } = recipeInfo;

  return <div>{directions}</div>;
};

CookingDirections.propTypes = {
  recipeInfo: PropTypes.shape({
    strInstructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default CookingDirections;
