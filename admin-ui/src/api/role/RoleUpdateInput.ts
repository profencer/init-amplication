import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleUpdateInput = {
  users?: UserWhereUniqueInput | null;
};
