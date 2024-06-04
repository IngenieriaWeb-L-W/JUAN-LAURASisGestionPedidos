"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutRatingInput_1 = require("../inputs/ProductCreateWithoutRatingInput");
const ProductUpdateWithoutRatingInput_1 = require("../inputs/ProductUpdateWithoutRatingInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpsertWithoutRatingInput = class ProductUpsertWithoutRatingInput {
};
exports.ProductUpsertWithoutRatingInput = ProductUpsertWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutRatingInput_1.ProductUpdateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutRatingInput_1.ProductUpdateWithoutRatingInput)
], ProductUpsertWithoutRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput)
], ProductUpsertWithoutRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpsertWithoutRatingInput.prototype, "where", void 0);
exports.ProductUpsertWithoutRatingInput = ProductUpsertWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutRatingInput", {})
], ProductUpsertWithoutRatingInput);
