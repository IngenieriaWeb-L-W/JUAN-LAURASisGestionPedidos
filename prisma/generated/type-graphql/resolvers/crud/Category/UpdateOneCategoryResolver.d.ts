import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCategoryArgs } from "./args/UpdateOneCategoryArgs";
import { Category } from "../../../models/Category";
export declare class UpdateOneCategoryResolver {
    updateOneCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCategoryArgs): Promise<Category | null>;
}
