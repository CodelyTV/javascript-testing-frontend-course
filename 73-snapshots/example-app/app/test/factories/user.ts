import { Factory } from "fishery";
import { name, internet } from "faker";
import { User } from "../../models/user.model"

export default Factory.define<User>(({ sequence }) => ({
  id: sequence,
  name: `${name.firstName()} ${name.lastName()}`,
  avatar: internet.avatar()
}));
