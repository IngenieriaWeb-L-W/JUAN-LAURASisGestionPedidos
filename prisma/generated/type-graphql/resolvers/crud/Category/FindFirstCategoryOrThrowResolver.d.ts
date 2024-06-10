import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoryOrThrowArgs } from "./args/FindFirstCategoryOrThrowArgs";
import { Category } from "../../../models/Category";
export declare class FindFirstCategoryOrThrowResolver {
    findFirstCategoryOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoryOrThrowArgs): Promise<Category | null>;
}
