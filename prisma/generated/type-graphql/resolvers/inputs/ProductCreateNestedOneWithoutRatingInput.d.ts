import { ProductCreateOrConnectWithoutRatingInput } from "../inputs/ProductCreateOrConnectWithoutRatingInput";
import { ProductCreateWithoutRatingInput } from "../inputs/ProductCreateWithoutRatingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutRatingInput {
    create?: ProductCreateWithoutRatingInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutRatingInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
