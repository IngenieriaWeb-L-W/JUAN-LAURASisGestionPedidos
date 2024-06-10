"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutCategoryInput_1 = require("../inputs/ProductCreateNestedManyWithoutCategoryInput");
let CategoryCreateInput = class CategoryCreateInput {
};
exports.CategoryCreateInput = CategoryCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoryInput_1.ProductCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutCategoryInput_1.ProductCreateNestedManyWithoutCategoryInput)
], CategoryCreateInput.prototype, "products", void 0);
exports.CategoryCreateInput = CategoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateInput", {})
], CategoryCreateInput);
