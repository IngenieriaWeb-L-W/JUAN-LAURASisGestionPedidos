import { ProductCreateOrConnectWithoutRatingInput } from "../inputs/ProductCreateOrConnectWithoutRatingInput";
import { ProductCreateWithoutRatingInput } from "../inputs/ProductCreateWithoutRatingInput";
import { ProductUpdateToOneWithWhereWithoutRatingInput } from "../inputs/ProductUpdateToOneWithWhereWithoutRatingInput";
import { ProductUpsertWithoutRatingInput } from "../inputs/ProductUpsertWithoutRatingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutRatingNestedInput {
    create?: ProductCreateWithoutRatingInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutRatingInput | undefined;
    upsert?: ProductUpsertWithoutRatingInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateToOneWithWhereWithoutRatingInput | undefined;
}
