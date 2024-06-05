import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class RatingWhereInput {
    AND?: RatingWhereInput[] | undefined;
    OR?: RatingWhereInput[] | undefined;
    NOT?: RatingWhereInput[] | undefined;
    id?: StringFilter | undefined;
    rate?: FloatFilter | undefined;
    count?: IntFilter | undefined;
    productId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    product?: ProductRelationFilter | undefined;
}
