import { assoc } from "@/utils/ts/assoc";
import { useId } from "react";

export const useGenerateId = () => {
  const useGenerateIdString = <O extends object>(obj: O) =>
    assoc("id", useId())(obj);
  return [useGenerateIdString];
};
