import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleWhereInput = {
  id?: StringFilter;
  users?: UserWhereUniqueInput;
};
