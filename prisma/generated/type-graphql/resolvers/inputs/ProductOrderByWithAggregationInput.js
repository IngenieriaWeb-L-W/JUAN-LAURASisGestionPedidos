"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductAvgOrderByAggregateInput_1 = require("../inputs/ProductAvgOrderByAggregateInput");
const ProductCountOrderByAggregateInput_1 = require("../inputs/ProductCountOrderByAggregateInput");
const ProductMaxOrderByAggregateInput_1 = require("../inputs/ProductMaxOrderByAggregateInput");
const ProductMinOrderByAggregateInput_1 = require("../inputs/ProductMinOrderByAggregateInput");
const ProductSumOrderByAggregateInput_1 = require("../inputs/ProductSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByWithAggregationInput = class ProductOrderByWithAggregationInput {
};
exports.ProductOrderByWithAggregationInput = ProductOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCountOrderByAggregateInput_1.ProductCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCountOrderByAggregateInput_1.ProductCountOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductAvgOrderByAggregateInput_1.ProductAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductAvgOrderByAggregateInput_1.ProductAvgOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductMaxOrderByAggregateInput_1.ProductMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductMaxOrderByAggregateInput_1.ProductMaxOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductMinOrderByAggregateInput_1.ProductMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductMinOrderByAggregateInput_1.ProductMinOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductSumOrderByAggregateInput_1.ProductSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductSumOrderByAggregateInput_1.ProductSumOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.ProductOrderByWithAggregationInput = ProductOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductOrderByWithAggregationInput", {})
], ProductOrderByWithAggregationInput);
