import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProductOrThrowArgs } from "./args/FindFirstProductOrThrowArgs";
import { Product } from "../../../models/Product";
export declare class FindFirstProductOrThrowResolver {
    findFirstProductOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductOrThrowArgs): Promise<Product | null>;
}
