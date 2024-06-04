"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryMaxAggregate = class CategoryMaxAggregate {
};
exports.CategoryMaxAggregate = CategoryMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMaxAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryMaxAggregate.prototype, "updatedAt", void 0);
exports.CategoryMaxAggregate = CategoryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryMaxAggregate", {})
], CategoryMaxAggregate);
