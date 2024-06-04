import type { GraphQLResolveInfo } from "graphql";
import { Product } from "../../../models/Product";
import { Rating } from "../../../models/Rating";
export declare class RatingRelationsResolver {
    product(rating: Rating, ctx: any, info: GraphQLResolveInfo): Promise<Product>;
}
