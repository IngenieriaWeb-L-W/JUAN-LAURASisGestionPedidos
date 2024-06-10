import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCategoryArgs } from "./args/DeleteOneCategoryArgs";
import { Category } from "../../../models/Category";
export declare class DeleteOneCategoryResolver {
    deleteOneCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCategoryArgs): Promise<Category | null>;
}
