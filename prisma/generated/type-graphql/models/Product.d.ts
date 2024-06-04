import { Category } from "../models/Category";
import { Rating } from "../models/Rating";
export declare class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    rating?: Rating | null;
    createdAt: Date;
    updatedAt: Date;
    category?: Category;
    categoryId: string;
}
