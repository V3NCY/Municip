import React from "react";
import PropTypes from "prop-types";
import "../Hotel/scss/cardMedia.scss";
import Slider from "../Hotel/Slider";

function CardMedia({ hotel }) {
  return (
    <div className="card-media">
      <span role="img" className="card-media__star my-2" aria-label="star">
        {" "}
        ⭐ {hotel.stars}
      </span>
      <Slider hotel={hotel} />
    </div>
  );
}

CardMedia.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardMedia;
