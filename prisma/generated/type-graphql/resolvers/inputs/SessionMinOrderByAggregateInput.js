"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SessionMinOrderByAggregateInput = class SessionMinOrderByAggregateInput {
};
exports.SessionMinOrderByAggregateInput = SessionMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.SessionMinOrderByAggregateInput = SessionMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionMinOrderByAggregateInput", {})
], SessionMinOrderByAggregateInput);
