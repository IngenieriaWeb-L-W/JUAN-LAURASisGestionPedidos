"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryOrderByWithRelationInput_1 = require("../inputs/CategoryOrderByWithRelationInput");
const RatingOrderByWithRelationInput_1 = require("../inputs/RatingOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput {
};
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingOrderByWithRelationInput_1.RatingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingOrderByWithRelationInput_1.RatingOrderByWithRelationInput)
], ProductOrderByWithRelationInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput)
], ProductOrderByWithRelationInput.prototype, "category", void 0);
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductOrderByWithRelationInput", {})
], ProductOrderByWithRelationInput);
