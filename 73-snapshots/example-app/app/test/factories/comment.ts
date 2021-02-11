import { Factory } from "fishery";
import { date, lorem } from "faker";
import { Comment } from "../../models/comment.model"
import user from "./user";

export default Factory.define<Comment>(({ sequence }) => ({
  id: sequence,
  date: date.recent().toISOString(),
  content: lorem.paragraph(),
  user: user.build()
}));
