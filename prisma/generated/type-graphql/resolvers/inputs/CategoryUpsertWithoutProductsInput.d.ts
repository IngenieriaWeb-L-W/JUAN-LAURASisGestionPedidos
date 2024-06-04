import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateWithoutProductsInput } from "../inputs/CategoryUpdateWithoutProductsInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
export declare class CategoryUpsertWithoutProductsInput {
    update: CategoryUpdateWithoutProductsInput;
    create: CategoryCreateWithoutProductsInput;
    where?: CategoryWhereInput | undefined;
}
