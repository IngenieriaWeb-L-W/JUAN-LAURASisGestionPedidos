import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CategoryWhereInput {
    AND?: CategoryWhereInput[] | undefined;
    OR?: CategoryWhereInput[] | undefined;
    NOT?: CategoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    products?: ProductListRelationFilter | undefined;
}
