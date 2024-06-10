import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCategoryArgs } from "./args/CreateOneCategoryArgs";
import { Category } from "../../../models/Category";
export declare class CreateOneCategoryResolver {
    createOneCategory(ctx: any, info: GraphQLResolveInfo, args: CreateOneCategoryArgs): Promise<Category>;
}
