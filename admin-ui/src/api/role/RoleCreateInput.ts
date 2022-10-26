import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleCreateInput = {
  users?: UserWhereUniqueInput | null;
};
