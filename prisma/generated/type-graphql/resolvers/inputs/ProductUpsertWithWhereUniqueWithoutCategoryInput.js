"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCategoryInput_1 = require("../inputs/ProductCreateWithoutCategoryInput");
const ProductUpdateWithoutCategoryInput_1 = require("../inputs/ProductUpdateWithoutCategoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutCategoryInput = class ProductUpsertWithWhereUniqueWithoutCategoryInput {
};
exports.ProductUpsertWithWhereUniqueWithoutCategoryInput = ProductUpsertWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoryInput_1.ProductUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCategoryInput_1.ProductUpdateWithoutCategoryInput)
], ProductUpsertWithWhereUniqueWithoutCategoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoryInput_1.ProductCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoryInput_1.ProductCreateWithoutCategoryInput)
], ProductUpsertWithWhereUniqueWithoutCategoryInput.prototype, "create", void 0);
exports.ProductUpsertWithWhereUniqueWithoutCategoryInput = ProductUpsertWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutCategoryInput", {})
], ProductUpsertWithWhereUniqueWithoutCategoryInput);
