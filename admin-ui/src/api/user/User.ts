import { JsonValue } from "type-fest";
import { Role } from "../role/Role";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userRole?: Array<Role>;
};
