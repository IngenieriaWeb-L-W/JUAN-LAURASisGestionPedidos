import { Category } from "../outputs/Category";
export declare class CreateManyProductAndReturnOutputType {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
}
