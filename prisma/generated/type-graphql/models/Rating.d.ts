import { Product } from "../models/Product";
export declare class Rating {
    id: string;
    rate: number;
    count: number;
    createdAt: Date;
    updatedAt: Date;
    product?: Product;
    productId: string;
}
