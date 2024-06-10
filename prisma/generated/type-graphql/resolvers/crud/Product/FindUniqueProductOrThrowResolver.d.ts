import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductOrThrowArgs } from "./args/FindUniqueProductOrThrowArgs";
import { Product } from "../../../models/Product";
export declare class FindUniqueProductOrThrowResolver {
    getProduct(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductOrThrowArgs): Promise<Product | null>;
}
