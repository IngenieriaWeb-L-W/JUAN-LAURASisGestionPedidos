"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RatingSumOrderByAggregateInput = class RatingSumOrderByAggregateInput {
};
exports.RatingSumOrderByAggregateInput = RatingSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingSumOrderByAggregateInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingSumOrderByAggregateInput.prototype, "count", void 0);
exports.RatingSumOrderByAggregateInput = RatingSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingSumOrderByAggregateInput", {})
], RatingSumOrderByAggregateInput);
