"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCategoryInputEnvelope_1 = require("../inputs/ProductCreateManyCategoryInputEnvelope");
const ProductCreateOrConnectWithoutCategoryInput_1 = require("../inputs/ProductCreateOrConnectWithoutCategoryInput");
const ProductCreateWithoutCategoryInput_1 = require("../inputs/ProductCreateWithoutCategoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutCategoryInput = class ProductCreateNestedManyWithoutCategoryInput {
};
exports.ProductCreateNestedManyWithoutCategoryInput = ProductCreateNestedManyWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCategoryInput_1.ProductCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoryInput_1.ProductCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyCategoryInputEnvelope_1.ProductCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyCategoryInputEnvelope_1.ProductCreateManyCategoryInputEnvelope)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
exports.ProductCreateNestedManyWithoutCategoryInput = ProductCreateNestedManyWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutCategoryInput", {})
], ProductCreateNestedManyWithoutCategoryInput);
