import React from "react";
import { connect } from "react-redux";
import { setHotels } from "../redux/actions";

function Hotels({ dispatch }) {
  dispatch(setHotels());

  return <div className="hotels"></div>;
}

export default connect()(Hotels);
