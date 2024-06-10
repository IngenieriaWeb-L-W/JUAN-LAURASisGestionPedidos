"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutRatingInput_1 = require("../inputs/ProductCreateOrConnectWithoutRatingInput");
const ProductCreateWithoutRatingInput_1 = require("../inputs/ProductCreateWithoutRatingInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutRatingInput = class ProductCreateNestedOneWithoutRatingInput {
};
exports.ProductCreateNestedOneWithoutRatingInput = ProductCreateNestedOneWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput)
], ProductCreateNestedOneWithoutRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutRatingInput_1.ProductCreateOrConnectWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutRatingInput_1.ProductCreateOrConnectWithoutRatingInput)
], ProductCreateNestedOneWithoutRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutRatingInput.prototype, "connect", void 0);
exports.ProductCreateNestedOneWithoutRatingInput = ProductCreateNestedOneWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutRatingInput", {})
], ProductCreateNestedOneWithoutRatingInput);
