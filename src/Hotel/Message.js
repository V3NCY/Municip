import React from "react";

function Message({ hotelName, startDate, endDate, duration }) {
  return (
    <div className="booking__message">
      Успешно резервирахте хотелска стая в: {hotelName}.<br />
      Настаняване: <time>{startDate}</time>
      <br />
      Отпътуване: <time>{endDate}</time>
      <br />
      Обща продължителност на престоя: {duration} нощувки.
    </div>
  );
}

export default Message;
