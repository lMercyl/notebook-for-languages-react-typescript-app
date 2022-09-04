import { shuffle, range } from "lodash";

export const formatText = (text: string) => {
  return text?.split("\n").map((item) => item.split(/[\.\!\?]/g));
}