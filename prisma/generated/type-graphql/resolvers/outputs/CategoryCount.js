"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCountProductsArgs_1 = require("./args/CategoryCountProductsArgs");
let CategoryCount = class CategoryCount {
    getProducts(root, args) {
        return root.products;
    }
};
exports.CategoryCount = CategoryCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "products",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CategoryCount, CategoryCountProductsArgs_1.CategoryCountProductsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CategoryCount.prototype, "getProducts", null);
exports.CategoryCount = CategoryCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryCount", {})
], CategoryCount);
