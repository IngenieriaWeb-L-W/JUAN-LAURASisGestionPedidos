"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutCategoryNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCategoryInputEnvelope_1 = require("../inputs/ProductCreateManyCategoryInputEnvelope");
const ProductCreateOrConnectWithoutCategoryInput_1 = require("../inputs/ProductCreateOrConnectWithoutCategoryInput");
const ProductCreateWithoutCategoryInput_1 = require("../inputs/ProductCreateWithoutCategoryInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutCategoryInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutCategoryInput");
const ProductUpdateWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutCategoryInput");
const ProductUpsertWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutCategoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutCategoryNestedInput = class ProductUpdateManyWithoutCategoryNestedInput {
};
exports.ProductUpdateManyWithoutCategoryNestedInput = ProductUpdateManyWithoutCategoryNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCategoryInput_1.ProductCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoryInput_1.ProductCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCategoryInput_1.ProductUpsertWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyCategoryInputEnvelope_1.ProductCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyCategoryInputEnvelope_1.ProductCreateManyCategoryInputEnvelope)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCategoryInput_1.ProductUpdateWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCategoryInput_1.ProductUpdateManyWithWhereWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
exports.ProductUpdateManyWithoutCategoryNestedInput = ProductUpdateManyWithoutCategoryNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutCategoryNestedInput", {})
], ProductUpdateManyWithoutCategoryNestedInput);
