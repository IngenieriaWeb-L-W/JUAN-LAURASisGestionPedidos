"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneRequiredWithoutProductsNestedInput_1 = require("../inputs/CategoryUpdateOneRequiredWithoutProductsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutRatingInput = class ProductUpdateWithoutRatingInput {
};
exports.ProductUpdateWithoutRatingInput = ProductUpdateWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProductsNestedInput_1.CategoryUpdateOneRequiredWithoutProductsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneRequiredWithoutProductsNestedInput_1.CategoryUpdateOneRequiredWithoutProductsNestedInput)
], ProductUpdateWithoutRatingInput.prototype, "category", void 0);
exports.ProductUpdateWithoutRatingInput = ProductUpdateWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutRatingInput", {})
], ProductUpdateWithoutRatingInput);
