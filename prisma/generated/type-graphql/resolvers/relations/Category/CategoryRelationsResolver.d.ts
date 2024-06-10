import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
import { CategoryProductsArgs } from "./args/CategoryProductsArgs";
export declare class CategoryRelationsResolver {
    products(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategoryProductsArgs): Promise<Product[]>;
}
