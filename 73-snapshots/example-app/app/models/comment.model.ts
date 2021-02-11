import { User } from './user.model'

export interface Comment {
  id: number,
  content: string,
  date: string,
  user: User
}

