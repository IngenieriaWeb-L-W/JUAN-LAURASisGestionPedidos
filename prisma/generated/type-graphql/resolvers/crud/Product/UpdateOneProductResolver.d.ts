import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProductArgs } from "./args/UpdateOneProductArgs";
import { Product } from "../../../models/Product";
export declare class UpdateOneProductResolver {
    updateOneProduct(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProductArgs): Promise<Product | null>;
}
