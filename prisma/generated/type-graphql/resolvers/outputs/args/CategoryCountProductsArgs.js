"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCountProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductWhereInput_1 = require("../../inputs/ProductWhereInput");
let CategoryCountProductsArgs = class CategoryCountProductsArgs {
};
exports.CategoryCountProductsArgs = CategoryCountProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], CategoryCountProductsArgs.prototype, "where", void 0);
exports.CategoryCountProductsArgs = CategoryCountProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CategoryCountProductsArgs);
