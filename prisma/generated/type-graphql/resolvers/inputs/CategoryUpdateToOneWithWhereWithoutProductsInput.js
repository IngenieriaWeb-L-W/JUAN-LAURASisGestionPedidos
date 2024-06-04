"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateToOneWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutProductsInput_1 = require("../inputs/CategoryUpdateWithoutProductsInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpdateToOneWithWhereWithoutProductsInput = class CategoryUpdateToOneWithWhereWithoutProductsInput {
};
exports.CategoryUpdateToOneWithWhereWithoutProductsInput = CategoryUpdateToOneWithWhereWithoutProductsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateToOneWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput)
], CategoryUpdateToOneWithWhereWithoutProductsInput.prototype, "data", void 0);
exports.CategoryUpdateToOneWithWhereWithoutProductsInput = CategoryUpdateToOneWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutProductsInput", {})
], CategoryUpdateToOneWithWhereWithoutProductsInput);
