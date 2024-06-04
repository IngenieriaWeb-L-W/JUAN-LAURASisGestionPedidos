import { ProductCreateNestedOneWithoutRatingInput } from "../inputs/ProductCreateNestedOneWithoutRatingInput";
export declare class RatingCreateInput {
    id?: string | undefined;
    rate: number;
    count: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    product: ProductCreateNestedOneWithoutRatingInput;
}
