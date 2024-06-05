"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RatingCountOrderByAggregateInput = class RatingCountOrderByAggregateInput {
};
exports.RatingCountOrderByAggregateInput = RatingCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCountOrderByAggregateInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCountOrderByAggregateInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCountOrderByAggregateInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.RatingCountOrderByAggregateInput = RatingCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCountOrderByAggregateInput", {})
], RatingCountOrderByAggregateInput);
