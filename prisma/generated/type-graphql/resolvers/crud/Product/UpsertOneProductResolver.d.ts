import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProductArgs } from "./args/UpsertOneProductArgs";
import { Product } from "../../../models/Product";
export declare class UpsertOneProductResolver {
    upsertOneProduct(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProductArgs): Promise<Product>;
}
