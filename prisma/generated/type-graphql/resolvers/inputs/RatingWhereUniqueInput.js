"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const RatingWhereInput_1 = require("../inputs/RatingWhereInput");
let RatingWhereUniqueInput = class RatingWhereUniqueInput {
};
exports.RatingWhereUniqueInput = RatingWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingWhereUniqueInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereInput_1.RatingWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereInput_1.RatingWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereInput_1.RatingWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], RatingWhereUniqueInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RatingWhereUniqueInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RatingWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RatingWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], RatingWhereUniqueInput.prototype, "product", void 0);
exports.RatingWhereUniqueInput = RatingWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingWhereUniqueInput", {})
], RatingWhereUniqueInput);
