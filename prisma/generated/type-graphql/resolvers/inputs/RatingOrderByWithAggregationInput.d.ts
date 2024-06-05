import { RatingAvgOrderByAggregateInput } from "../inputs/RatingAvgOrderByAggregateInput";
import { RatingCountOrderByAggregateInput } from "../inputs/RatingCountOrderByAggregateInput";
import { RatingMaxOrderByAggregateInput } from "../inputs/RatingMaxOrderByAggregateInput";
import { RatingMinOrderByAggregateInput } from "../inputs/RatingMinOrderByAggregateInput";
import { RatingSumOrderByAggregateInput } from "../inputs/RatingSumOrderByAggregateInput";
export declare class RatingOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    rate?: "asc" | "desc" | undefined;
    count?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: RatingCountOrderByAggregateInput | undefined;
    _avg?: RatingAvgOrderByAggregateInput | undefined;
    _max?: RatingMaxOrderByAggregateInput | undefined;
    _min?: RatingMinOrderByAggregateInput | undefined;
    _sum?: RatingSumOrderByAggregateInput | undefined;
}
