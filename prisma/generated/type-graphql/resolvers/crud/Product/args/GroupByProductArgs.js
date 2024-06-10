"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductOrderByWithAggregationInput_1 = require("../../../inputs/ProductOrderByWithAggregationInput");
const ProductScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProductScalarWhereWithAggregatesInput");
const ProductWhereInput_1 = require("../../../inputs/ProductWhereInput");
const ProductScalarFieldEnum_1 = require("../../../../enums/ProductScalarFieldEnum");
let GroupByProductArgs = class GroupByProductArgs {
};
exports.GroupByProductArgs = GroupByProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], GroupByProductArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductOrderByWithAggregationInput_1.ProductOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProductArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarFieldEnum_1.ProductScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProductArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductScalarWhereWithAggregatesInput_1.ProductScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductScalarWhereWithAggregatesInput_1.ProductScalarWhereWithAggregatesInput)
], GroupByProductArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProductArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProductArgs.prototype, "skip", void 0);
exports.GroupByProductArgs = GroupByProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProductArgs);
