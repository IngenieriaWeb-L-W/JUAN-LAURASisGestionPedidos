"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CategoryWhereInput = class CategoryWhereInput {
};
exports.CategoryWhereInput = CategoryWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CategoryWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CategoryWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], CategoryWhereInput.prototype, "products", void 0);
exports.CategoryWhereInput = CategoryWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryWhereInput", {})
], CategoryWhereInput);
