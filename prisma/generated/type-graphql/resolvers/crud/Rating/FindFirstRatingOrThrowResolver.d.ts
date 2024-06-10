import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRatingOrThrowArgs } from "./args/FindFirstRatingOrThrowArgs";
import { Rating } from "../../../models/Rating";
export declare class FindFirstRatingOrThrowResolver {
    findFirstRatingOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRatingOrThrowArgs): Promise<Rating | null>;
}
