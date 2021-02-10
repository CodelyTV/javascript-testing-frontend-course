import { Factory } from "fishery";
import { internet, lorem } from "faker";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  username: internet.userName(),
  title: lorem.sentence(),
  body: lorem.paragraph(),
}));

export function generateComment(params) {
  return factory.build(params);
}

export function generateCommentList(min = 0, max = 10) {
  const length = Math.random() * (max - min) + min;
  return factory.buildList(length);
}
