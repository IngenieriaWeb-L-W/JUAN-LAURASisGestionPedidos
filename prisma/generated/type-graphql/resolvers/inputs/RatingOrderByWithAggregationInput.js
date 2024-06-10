"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingAvgOrderByAggregateInput_1 = require("../inputs/RatingAvgOrderByAggregateInput");
const RatingCountOrderByAggregateInput_1 = require("../inputs/RatingCountOrderByAggregateInput");
const RatingMaxOrderByAggregateInput_1 = require("../inputs/RatingMaxOrderByAggregateInput");
const RatingMinOrderByAggregateInput_1 = require("../inputs/RatingMinOrderByAggregateInput");
const RatingSumOrderByAggregateInput_1 = require("../inputs/RatingSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RatingOrderByWithAggregationInput = class RatingOrderByWithAggregationInput {
};
exports.RatingOrderByWithAggregationInput = RatingOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithAggregationInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithAggregationInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithAggregationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCountOrderByAggregateInput_1.RatingCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCountOrderByAggregateInput_1.RatingCountOrderByAggregateInput)
], RatingOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingAvgOrderByAggregateInput_1.RatingAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingAvgOrderByAggregateInput_1.RatingAvgOrderByAggregateInput)
], RatingOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMaxOrderByAggregateInput_1.RatingMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMaxOrderByAggregateInput_1.RatingMaxOrderByAggregateInput)
], RatingOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMinOrderByAggregateInput_1.RatingMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMinOrderByAggregateInput_1.RatingMinOrderByAggregateInput)
], RatingOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingSumOrderByAggregateInput_1.RatingSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingSumOrderByAggregateInput_1.RatingSumOrderByAggregateInput)
], RatingOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.RatingOrderByWithAggregationInput = RatingOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingOrderByWithAggregationInput", {})
], RatingOrderByWithAggregationInput);
