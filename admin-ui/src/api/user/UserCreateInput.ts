import { InputJsonValue } from "../../types";
import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  userRole?: RoleCreateNestedManyWithoutUsersInput;
};
