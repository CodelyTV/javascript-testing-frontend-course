import { Factory } from "fishery";
import { date, lorem } from "faker";
import user from "./user";

export default Factory.define(({ sequence }) => ({
  id: sequence,
  date: date.recent().toISOString(),
  content: lorem.paragraph(),
  user: user.build()
}));
