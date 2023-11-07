import { declOfNum } from "./declOfNum";

export const formatTime = (time: number) => {
  const hour = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  const seconds = Math.floor((time * 60) % 60);

  const hourWorlds = ["час", "часа", "часов"];
  const minutesWorlds = ["минута", "минуты", "минут"];

  return {
    hour,
    minutes,
    hourText: declOfNum(hour, hourWorlds),
    minutesText: declOfNum(minutes, minutesWorlds),
    seconds,
    isHour: hour !== 0,
    isMinutes: minutes !== 0,
  };
};
