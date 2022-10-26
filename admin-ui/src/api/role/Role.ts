import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: User | null;
};
