"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateToOneWithWhereWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutRatingInput_1 = require("../inputs/ProductUpdateWithoutRatingInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpdateToOneWithWhereWithoutRatingInput = class ProductUpdateToOneWithWhereWithoutRatingInput {
};
exports.ProductUpdateToOneWithWhereWithoutRatingInput = ProductUpdateToOneWithWhereWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpdateToOneWithWhereWithoutRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutRatingInput_1.ProductUpdateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutRatingInput_1.ProductUpdateWithoutRatingInput)
], ProductUpdateToOneWithWhereWithoutRatingInput.prototype, "data", void 0);
exports.ProductUpdateToOneWithWhereWithoutRatingInput = ProductUpdateToOneWithWhereWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutRatingInput", {})
], ProductUpdateToOneWithWhereWithoutRatingInput);
