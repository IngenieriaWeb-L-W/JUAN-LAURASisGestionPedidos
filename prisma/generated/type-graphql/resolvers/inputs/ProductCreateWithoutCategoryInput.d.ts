import { RatingCreateNestedOneWithoutProductInput } from "../inputs/RatingCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutCategoryInput {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rating?: RatingCreateNestedOneWithoutProductInput | undefined;
}
