"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCategory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCountAggregate_1 = require("../outputs/CategoryCountAggregate");
const CategoryMaxAggregate_1 = require("../outputs/CategoryMaxAggregate");
const CategoryMinAggregate_1 = require("../outputs/CategoryMinAggregate");
let AggregateCategory = class AggregateCategory {
};
exports.AggregateCategory = AggregateCategory;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCountAggregate_1.CategoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCountAggregate_1.CategoryCountAggregate)
], AggregateCategory.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryMinAggregate_1.CategoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryMinAggregate_1.CategoryMinAggregate)
], AggregateCategory.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryMaxAggregate_1.CategoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryMaxAggregate_1.CategoryMaxAggregate)
], AggregateCategory.prototype, "_max", void 0);
exports.AggregateCategory = AggregateCategory = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCategory", {})
], AggregateCategory);
