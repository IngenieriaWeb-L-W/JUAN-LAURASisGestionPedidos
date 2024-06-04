import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutRatingNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutRatingNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class RatingUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    rate?: FloatFieldUpdateOperationsInput | undefined;
    count?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutRatingNestedInput | undefined;
}
