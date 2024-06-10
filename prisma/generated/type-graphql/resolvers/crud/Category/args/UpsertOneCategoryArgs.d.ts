import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
export declare class UpsertOneCategoryArgs {
    where: CategoryWhereUniqueInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
}
