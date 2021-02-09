import { Factory } from "fishery";
import { date, lorem } from "faker";
import { generateUser } from "./user";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  date: date.recent().toISOString(),
  content: lorem.paragraph(),
  user: generateUser()
}));

export function generateComment(params) {
  return factory.build(params);
}

export function generateCommentList(min = 0, max = 10) {
  const length = Math.random() * (max - min) + min;
  return factory.buildList(length);
}
