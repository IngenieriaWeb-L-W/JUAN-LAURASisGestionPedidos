"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProductsInput");
let ProductCreateWithoutRatingInput = class ProductCreateWithoutRatingInput {
};
exports.ProductCreateWithoutRatingInput = ProductCreateWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutRatingInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutRatingInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutRatingInput.prototype, "category", void 0);
exports.ProductCreateWithoutRatingInput = ProductCreateWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutRatingInput", {})
], ProductCreateWithoutRatingInput);
