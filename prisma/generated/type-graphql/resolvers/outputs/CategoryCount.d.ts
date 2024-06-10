import { CategoryCountProductsArgs } from "./args/CategoryCountProductsArgs";
export declare class CategoryCount {
    products: number;
    getProducts(root: CategoryCount, args: CategoryCountProductsArgs): number;
}
