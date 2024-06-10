import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
import { Rating } from "../../../models/Rating";
import { ProductRatingArgs } from "./args/ProductRatingArgs";
export declare class ProductRelationsResolver {
    rating(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductRatingArgs): Promise<Rating | null>;
    category(product: Product, ctx: any, info: GraphQLResolveInfo): Promise<Category>;
}
