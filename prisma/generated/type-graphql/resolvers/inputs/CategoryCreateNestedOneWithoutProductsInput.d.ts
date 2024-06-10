import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedOneWithoutProductsInput {
    create?: CategoryCreateWithoutProductsInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
}
