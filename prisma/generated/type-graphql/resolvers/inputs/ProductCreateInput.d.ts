import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { RatingCreateNestedOneWithoutProductInput } from "../inputs/RatingCreateNestedOneWithoutProductInput";
export declare class ProductCreateInput {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rating?: RatingCreateNestedOneWithoutProductInput | undefined;
    category: CategoryCreateNestedOneWithoutProductsInput;
}
