"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryRelationFilter_1 = require("../inputs/CategoryRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
const RatingNullableRelationFilter_1 = require("../inputs/RatingNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1.ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1.ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1.ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], ProductWhereUniqueInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereUniqueInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereUniqueInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingNullableRelationFilter_1.RatingNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingNullableRelationFilter_1.RatingNullableRelationFilter)
], ProductWhereUniqueInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryRelationFilter_1.CategoryRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryRelationFilter_1.CategoryRelationFilter)
], ProductWhereUniqueInput.prototype, "category", void 0);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereUniqueInput", {})
], ProductWhereUniqueInput);
