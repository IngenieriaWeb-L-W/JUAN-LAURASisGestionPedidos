import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
}
