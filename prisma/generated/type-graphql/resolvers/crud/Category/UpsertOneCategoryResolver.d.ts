import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCategoryArgs } from "./args/UpsertOneCategoryArgs";
import { Category } from "../../../models/Category";
export declare class UpsertOneCategoryResolver {
    upsertOneCategory(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCategoryArgs): Promise<Category>;
}
