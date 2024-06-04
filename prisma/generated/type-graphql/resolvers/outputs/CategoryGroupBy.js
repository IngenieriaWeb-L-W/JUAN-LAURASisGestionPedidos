"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCountAggregate_1 = require("../outputs/CategoryCountAggregate");
const CategoryMaxAggregate_1 = require("../outputs/CategoryMaxAggregate");
const CategoryMinAggregate_1 = require("../outputs/CategoryMinAggregate");
let CategoryGroupBy = class CategoryGroupBy {
};
exports.CategoryGroupBy = CategoryGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCountAggregate_1.CategoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCountAggregate_1.CategoryCountAggregate)
], CategoryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryMinAggregate_1.CategoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryMinAggregate_1.CategoryMinAggregate)
], CategoryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryMaxAggregate_1.CategoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryMaxAggregate_1.CategoryMaxAggregate)
], CategoryGroupBy.prototype, "_max", void 0);
exports.CategoryGroupBy = CategoryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryGroupBy", {})
], CategoryGroupBy);
