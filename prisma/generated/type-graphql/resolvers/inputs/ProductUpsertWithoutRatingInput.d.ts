import { ProductCreateWithoutRatingInput } from "../inputs/ProductCreateWithoutRatingInput";
import { ProductUpdateWithoutRatingInput } from "../inputs/ProductUpdateWithoutRatingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
export declare class ProductUpsertWithoutRatingInput {
    update: ProductUpdateWithoutRatingInput;
    create: ProductCreateWithoutRatingInput;
    where?: ProductWhereInput | undefined;
}
