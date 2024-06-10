import { ProductCreateNestedManyWithoutCategoryInput } from "../inputs/ProductCreateNestedManyWithoutCategoryInput";
export declare class CategoryCreateInput {
    id?: string | undefined;
    name: string;
    description: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    products?: ProductCreateNestedManyWithoutCategoryInput | undefined;
}
