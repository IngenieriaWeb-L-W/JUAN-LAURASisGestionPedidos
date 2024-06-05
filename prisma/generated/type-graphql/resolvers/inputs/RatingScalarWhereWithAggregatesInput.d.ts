import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RatingScalarWhereWithAggregatesInput {
    AND?: RatingScalarWhereWithAggregatesInput[] | undefined;
    OR?: RatingScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RatingScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    rate?: FloatWithAggregatesFilter | undefined;
    count?: IntWithAggregatesFilter | undefined;
    productId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
