import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProductArgs } from "./args/CreateOneProductArgs";
import { Product } from "../../../models/Product";
export declare class CreateOneProductResolver {
    createOneProduct(ctx: any, info: GraphQLResolveInfo, args: CreateOneProductArgs): Promise<Product>;
}
