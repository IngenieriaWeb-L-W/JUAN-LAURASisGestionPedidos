import { RatingAvgAggregate } from "../outputs/RatingAvgAggregate";
import { RatingCountAggregate } from "../outputs/RatingCountAggregate";
import { RatingMaxAggregate } from "../outputs/RatingMaxAggregate";
import { RatingMinAggregate } from "../outputs/RatingMinAggregate";
import { RatingSumAggregate } from "../outputs/RatingSumAggregate";
export declare class RatingGroupBy {
    id: string;
    rate: number;
    count: number;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RatingCountAggregate | null;
    _avg: RatingAvgAggregate | null;
    _sum: RatingSumAggregate | null;
    _min: RatingMinAggregate | null;
    _max: RatingMaxAggregate | null;
}
