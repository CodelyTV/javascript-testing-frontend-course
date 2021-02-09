import { Factory } from "fishery";
import { name, internet } from "faker";

export default Factory.define(({ sequence }) => ({
  id: sequence,
  name: `${name.firstName()} ${name.lastName()}`,
  avatar: internet.avatar()
}));
