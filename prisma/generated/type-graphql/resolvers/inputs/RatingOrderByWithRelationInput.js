"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RatingOrderByWithRelationInput = class RatingOrderByWithRelationInput {
};
exports.RatingOrderByWithRelationInput = RatingOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], RatingOrderByWithRelationInput.prototype, "product", void 0);
exports.RatingOrderByWithRelationInput = RatingOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingOrderByWithRelationInput", {})
], RatingOrderByWithRelationInput);
