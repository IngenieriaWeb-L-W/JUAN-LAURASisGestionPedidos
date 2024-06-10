import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneProductArgs } from "./args/DeleteOneProductArgs";
import { Product } from "../../../models/Product";
export declare class DeleteOneProductResolver {
    deleteOneProduct(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProductArgs): Promise<Product | null>;
}
