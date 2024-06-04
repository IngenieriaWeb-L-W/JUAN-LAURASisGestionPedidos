import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CategoryScalarWhereWithAggregatesInput {
    AND?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
