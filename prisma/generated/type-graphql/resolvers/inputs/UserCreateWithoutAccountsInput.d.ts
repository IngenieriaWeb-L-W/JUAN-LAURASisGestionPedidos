import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
