"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductSumAggregate = class ProductSumAggregate {
};
exports.ProductSumAggregate = ProductSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductSumAggregate.prototype, "price", void 0);
exports.ProductSumAggregate = ProductSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductSumAggregate", {})
], ProductSumAggregate);
