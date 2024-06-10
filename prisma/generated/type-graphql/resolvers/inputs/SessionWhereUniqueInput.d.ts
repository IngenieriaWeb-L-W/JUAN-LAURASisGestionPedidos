import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SessionWhereInput } from "../inputs/SessionWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SessionWhereUniqueInput {
    sessionToken?: string | undefined;
    AND?: SessionWhereInput[] | undefined;
    OR?: SessionWhereInput[] | undefined;
    NOT?: SessionWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
}
