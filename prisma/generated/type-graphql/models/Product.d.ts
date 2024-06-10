import { Category } from "../models/Category";
import { Rating } from "../models/Rating";
export declare class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    rating?: Rating | null;
    quantity: number;
    category?: Category;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
}
