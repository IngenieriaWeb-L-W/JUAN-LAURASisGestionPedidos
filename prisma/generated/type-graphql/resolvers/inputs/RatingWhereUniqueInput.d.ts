import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { RatingWhereInput } from "../inputs/RatingWhereInput";
export declare class RatingWhereUniqueInput {
    id?: string | undefined;
    productId?: string | undefined;
    AND?: RatingWhereInput[] | undefined;
    OR?: RatingWhereInput[] | undefined;
    NOT?: RatingWhereInput[] | undefined;
    rate?: FloatFilter | undefined;
    count?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    product?: ProductRelationFilter | undefined;
}
