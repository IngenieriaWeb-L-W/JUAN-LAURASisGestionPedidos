"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCategoryInput_1 = require("../inputs/ProductCreateWithoutCategoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutCategoryInput = class ProductCreateOrConnectWithoutCategoryInput {
};
exports.ProductCreateOrConnectWithoutCategoryInput = ProductCreateOrConnectWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoryInput_1.ProductCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoryInput_1.ProductCreateWithoutCategoryInput)
], ProductCreateOrConnectWithoutCategoryInput.prototype, "create", void 0);
exports.ProductCreateOrConnectWithoutCategoryInput = ProductCreateOrConnectWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutCategoryInput", {})
], ProductCreateOrConnectWithoutCategoryInput);
