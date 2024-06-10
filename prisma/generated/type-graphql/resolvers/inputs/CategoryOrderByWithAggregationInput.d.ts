import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
export declare class CategoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: CategoryCountOrderByAggregateInput | undefined;
    _max?: CategoryMaxOrderByAggregateInput | undefined;
    _min?: CategoryMinOrderByAggregateInput | undefined;
}
