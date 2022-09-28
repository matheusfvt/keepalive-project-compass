import { useEffect, useState } from "react";
import { days, months } from "./day-month";
import { ItemClock } from "./styles";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  var lessTen = false;

  let day = days[date.getDay()];
  let dayMonth = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let minute = date.getMinutes();
  let hour = date.getHours();

  useEffect(() => {
    const Calendar = setInterval(()=>{
    setDate(new Date());
    }, 1000);
  }, []);

  if (minute < 10) {
    lessTen = true;
  } else {
    lessTen = false;
  }

  return (
    <ItemClock>
      <p>
        {hour}:{lessTen ? "0" : null}
                {minute}
      </p>
      <span>{day}, {dayMonth} de {month} de {year}</span>
    </ItemClock>
  );
}
