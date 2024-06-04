import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRatingOrThrowArgs } from "./args/FindUniqueRatingOrThrowArgs";
import { Rating } from "../../../models/Rating";
export declare class FindUniqueRatingOrThrowResolver {
    getRating(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRatingOrThrowArgs): Promise<Rating | null>;
}
