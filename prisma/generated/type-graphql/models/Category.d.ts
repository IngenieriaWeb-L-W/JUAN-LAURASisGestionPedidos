import { Product } from "../models/Product";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";
export declare class Category {
    id: string;
    name: string;
    description: string;
    products?: Product[];
    createdAt: Date;
    updatedAt: Date;
    _count?: CategoryCount | null;
}
