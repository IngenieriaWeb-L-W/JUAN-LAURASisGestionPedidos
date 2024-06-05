"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductAvgAggregate_1 = require("../outputs/ProductAvgAggregate");
const ProductCountAggregate_1 = require("../outputs/ProductCountAggregate");
const ProductMaxAggregate_1 = require("../outputs/ProductMaxAggregate");
const ProductMinAggregate_1 = require("../outputs/ProductMinAggregate");
const ProductSumAggregate_1 = require("../outputs/ProductSumAggregate");
let ProductGroupBy = class ProductGroupBy {
};
exports.ProductGroupBy = ProductGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductGroupBy.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductGroupBy.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProductGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProductGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCountAggregate_1.ProductCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCountAggregate_1.ProductCountAggregate)
], ProductGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductAvgAggregate_1.ProductAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductAvgAggregate_1.ProductAvgAggregate)
], ProductGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductSumAggregate_1.ProductSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductSumAggregate_1.ProductSumAggregate)
], ProductGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductMinAggregate_1.ProductMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductMinAggregate_1.ProductMinAggregate)
], ProductGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductMaxAggregate_1.ProductMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductMaxAggregate_1.ProductMaxAggregate)
], ProductGroupBy.prototype, "_max", void 0);
exports.ProductGroupBy = ProductGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductGroupBy", {})
], ProductGroupBy);
