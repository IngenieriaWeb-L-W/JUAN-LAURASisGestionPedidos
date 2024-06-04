import { Category } from "../outputs/Category";
export declare class CreateManyProductAndReturnOutputType {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
    category: Category;
}
