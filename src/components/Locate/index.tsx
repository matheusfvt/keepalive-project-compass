import React, { useEffect, useState } from "react";
import { ItemTimezone } from "./styles";
import logoTimezone from "assets/iconTimezone.svg";

export default function Locate() {
  const [city, setCity] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a329dc5e897a55fceb4fc1ef75c9509f&lang=pt_br`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setCity(`${result.name} - ${result.sys.country}`);
          setTemp(Math.round(result.main.temp - 273.15));
        });
    });
  }, [lat, long]);
  return (
    <ItemTimezone>
      <p>{city}</p>
      <div>
        <img src={logoTimezone} alt="logo timezone" />
        <span>{temp}°</span>
      </div>
    </ItemTimezone>
  );
}
