import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
export declare class ProductCreateWithoutRatingInput {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    category: CategoryCreateNestedOneWithoutProductsInput;
}
