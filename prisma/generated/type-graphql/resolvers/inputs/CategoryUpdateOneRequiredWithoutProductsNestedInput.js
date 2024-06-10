"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneRequiredWithoutProductsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProductsInput");
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryUpdateToOneWithWhereWithoutProductsInput_1 = require("../inputs/CategoryUpdateToOneWithWhereWithoutProductsInput");
const CategoryUpsertWithoutProductsInput_1 = require("../inputs/CategoryUpsertWithoutProductsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateOneRequiredWithoutProductsNestedInput = class CategoryUpdateOneRequiredWithoutProductsNestedInput {
};
exports.CategoryUpdateOneRequiredWithoutProductsNestedInput = CategoryUpdateOneRequiredWithoutProductsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput)
], CategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput)
], CategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpsertWithoutProductsInput_1.CategoryUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpsertWithoutProductsInput_1.CategoryUpsertWithoutProductsInput)
], CategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutProductsInput_1.CategoryUpdateToOneWithWhereWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateToOneWithWhereWithoutProductsInput_1.CategoryUpdateToOneWithWhereWithoutProductsInput)
], CategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneRequiredWithoutProductsNestedInput = CategoryUpdateOneRequiredWithoutProductsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutProductsNestedInput", {})
], CategoryUpdateOneRequiredWithoutProductsNestedInput);
