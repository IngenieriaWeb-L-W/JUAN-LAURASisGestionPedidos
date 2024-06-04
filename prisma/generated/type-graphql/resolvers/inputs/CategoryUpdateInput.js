"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/ProductUpdateManyWithoutCategoryNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CategoryUpdateInput = class CategoryUpdateInput {
};
exports.CategoryUpdateInput = CategoryUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutCategoryNestedInput_1.ProductUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutCategoryNestedInput_1.ProductUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateInput.prototype, "products", void 0);
exports.CategoryUpdateInput = CategoryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateInput", {})
], CategoryUpdateInput);
