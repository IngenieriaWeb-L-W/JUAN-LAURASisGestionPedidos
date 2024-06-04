"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedOneWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProductsInput");
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedOneWithoutProductsInput = class CategoryCreateNestedOneWithoutProductsInput {
};
exports.CategoryCreateNestedOneWithoutProductsInput = CategoryCreateNestedOneWithoutProductsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput)
], CategoryCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput)
], CategoryCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
exports.CategoryCreateNestedOneWithoutProductsInput = CategoryCreateNestedOneWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedOneWithoutProductsInput", {})
], CategoryCreateNestedOneWithoutProductsInput);
