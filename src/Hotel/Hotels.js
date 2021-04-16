import React from "react";
import PropTypes from "prop-types";
import Card from "../Hotel/Card";
import SearchBar from "../Hotel/SearchBarContainer";

function Hotels({ hotels }) {
  const count = hotels.length > 0 ? `${hotels.length} ` : "";
  const cards =
    hotels.length > 0 ? (
      hotels.map((h) => <Card key={h.id} hotel={h} />)
    ) : (
      <p>Няма намерени хотели</p>
    );

  return (
    <section className="page">
      <SearchBar />
      <h2 className="page__title">Всички хотели: {count}</h2>
      {cards}
    </section>
  );
}

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hotels;
