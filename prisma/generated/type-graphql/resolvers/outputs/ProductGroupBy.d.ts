import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class ProductGroupBy {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregate | null;
    _avg: ProductAvgAggregate | null;
    _sum: ProductSumAggregate | null;
    _min: ProductMinAggregate | null;
    _max: ProductMaxAggregate | null;
}
