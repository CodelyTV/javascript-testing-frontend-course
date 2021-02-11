import { Factory } from "fishery";
import { lorem } from "faker";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  title: lorem.sentence(),
  body: lorem.paragraph(),
}));

export function generateArticle(params) {
  return factory.build(params);
}
