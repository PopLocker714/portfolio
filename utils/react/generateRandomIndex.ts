import { assoc } from "../ts/assoc";

export const generateRandomString = () =>
  Math.random().toString(36).substring(2, 15);

export const assignId = assoc("id", generateRandomString());

export const generateId = <O extends object>(obj: O) =>
  assoc("id", generateRandomString())(obj);

// Функция для генерации UUID
export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
