"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CategoryWhereUniqueInput = class CategoryWhereUniqueInput {
};
exports.CategoryWhereUniqueInput = CategoryWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1.CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1.CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1.CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CategoryWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CategoryWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], CategoryWhereUniqueInput.prototype, "products", void 0);
exports.CategoryWhereUniqueInput = CategoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryWhereUniqueInput", {})
], CategoryWhereUniqueInput);
