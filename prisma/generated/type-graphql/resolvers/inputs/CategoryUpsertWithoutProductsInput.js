"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryUpdateWithoutProductsInput_1 = require("../inputs/CategoryUpdateWithoutProductsInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpsertWithoutProductsInput = class CategoryUpsertWithoutProductsInput {
};
exports.CategoryUpsertWithoutProductsInput = CategoryUpsertWithoutProductsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput)
], CategoryUpsertWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput)
], CategoryUpsertWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpsertWithoutProductsInput.prototype, "where", void 0);
exports.CategoryUpsertWithoutProductsInput = CategoryUpsertWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithoutProductsInput", {})
], CategoryUpsertWithoutProductsInput);
