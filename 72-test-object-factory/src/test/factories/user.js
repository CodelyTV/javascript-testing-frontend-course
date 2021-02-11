import { Factory } from "fishery";
import { name, internet } from "faker";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: `${name.firstName()} ${name.lastName()}`,
  avatar: internet.avatar()
}));

export function generateUser(params) {
  return factory.build(params);
}
