import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    role?: EnumRoleFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
}
