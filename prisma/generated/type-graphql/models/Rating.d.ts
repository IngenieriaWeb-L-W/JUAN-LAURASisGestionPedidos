import { Product } from "../models/Product";
export declare class Rating {
    id: string;
    rate: number;
    count: number;
    product?: Product;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
}
