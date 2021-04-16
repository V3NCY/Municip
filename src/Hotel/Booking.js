import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import "moment/locale/en-gb";
import "../Hotel/scss/booking.scss";
import moment from "moment";
import Message from "./Message";
import PropTypes from "prop-types";
import CommentInput from "./Comments/containers/CommentInput";
import { Button } from "reactstrap";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      duration: 0,
      booked: false,
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.book = this.book.bind(this);
  }

  handleDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
      duration: moment(endDate).diff(startDate, "days"),
    });
  }

  book() {
    this.setState({ booked: true });
  }

  render() {
    const { startDate, endDate, focusedInput, duration, booked } = this.state;
    const startStr = moment(startDate).format("dddd, D MMMM YYYY");
    const endStr = moment(endDate).format("dddd, D MMMM YYYY");

    return (
      <div className="booking">
        <p>Изберете дата на престой: </p>
        <div className="booking-dates">
          <DateRangePicker
            startDate={startDate}
            startDateId="start_date_id"
            endDate={endDate}
            endDateId="end_date_id"
            onDatesChange={this.handleDateChange}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          />
        </div>
        {booked && (
          <Message
            hotelName={this.props.hotel.name}
            startDate={startStr}
            endDate={endStr}
            duration={duration}
          />
        )}
        {!booked && (
          <Button onClick={this.book} className="card__link">
            Резервирайте сега
          </Button>
        )}
        <CommentInput />
      </div>
    );
  }
}

Booking.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default Booking;
