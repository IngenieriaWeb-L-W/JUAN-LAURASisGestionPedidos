import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryOrThrowArgs } from "./args/FindUniqueCategoryOrThrowArgs";
import { Category } from "../../../models/Category";
export declare class FindUniqueCategoryOrThrowResolver {
    getCategory(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoryOrThrowArgs): Promise<Category | null>;
}
