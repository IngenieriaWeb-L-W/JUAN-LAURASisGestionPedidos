"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutCategoryInput_1 = require("../inputs/ProductUpdateWithoutCategoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutCategoryInput = class ProductUpdateWithWhereUniqueWithoutCategoryInput {
};
exports.ProductUpdateWithWhereUniqueWithoutCategoryInput = ProductUpdateWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoryInput_1.ProductUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCategoryInput_1.ProductUpdateWithoutCategoryInput)
], ProductUpdateWithWhereUniqueWithoutCategoryInput.prototype, "data", void 0);
exports.ProductUpdateWithWhereUniqueWithoutCategoryInput = ProductUpdateWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutCategoryInput", {})
], ProductUpdateWithWhereUniqueWithoutCategoryInput);
