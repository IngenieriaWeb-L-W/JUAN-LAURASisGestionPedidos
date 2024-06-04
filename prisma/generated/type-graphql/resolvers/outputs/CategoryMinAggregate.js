"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryMinAggregate = class CategoryMinAggregate {
};
exports.CategoryMinAggregate = CategoryMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMinAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryMinAggregate.prototype, "updatedAt", void 0);
exports.CategoryMinAggregate = CategoryMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryMinAggregate", {})
], CategoryMinAggregate);
