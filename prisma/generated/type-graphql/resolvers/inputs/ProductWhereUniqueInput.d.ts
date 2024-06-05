import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { RatingNullableRelationFilter } from "../inputs/RatingNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductWhereUniqueInput {
    id?: string | undefined;
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    image?: StringFilter | undefined;
    categoryId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    rating?: RatingNullableRelationFilter | undefined;
    category?: CategoryRelationFilter | undefined;
}
