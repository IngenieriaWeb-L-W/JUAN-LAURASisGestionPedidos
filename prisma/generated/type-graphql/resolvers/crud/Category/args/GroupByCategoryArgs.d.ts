import { CategoryOrderByWithAggregationInput } from "../../../inputs/CategoryOrderByWithAggregationInput";
import { CategoryScalarWhereWithAggregatesInput } from "../../../inputs/CategoryScalarWhereWithAggregatesInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
export declare class GroupByCategoryArgs {
    where?: CategoryWhereInput | undefined;
    orderBy?: CategoryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "createdAt" | "updatedAt">;
    having?: CategoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
