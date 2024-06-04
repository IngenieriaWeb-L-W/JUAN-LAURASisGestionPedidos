import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { RatingUpdateOneWithoutProductNestedInput } from "../inputs/RatingUpdateOneWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutCategoryInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    rating?: RatingUpdateOneWithoutProductNestedInput | undefined;
}
