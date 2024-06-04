import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateToOneWithWhereWithoutProductsInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutProductsInput";
import { CategoryUpsertWithoutProductsInput } from "../inputs/CategoryUpsertWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateOneRequiredWithoutProductsNestedInput {
    create?: CategoryCreateWithoutProductsInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | undefined;
    upsert?: CategoryUpsertWithoutProductsInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
    update?: CategoryUpdateToOneWithWhereWithoutProductsInput | undefined;
}
