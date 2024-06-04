"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutRatingInput_1 = require("../inputs/ProductCreateWithoutRatingInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutRatingInput = class ProductCreateOrConnectWithoutRatingInput {
};
exports.ProductCreateOrConnectWithoutRatingInput = ProductCreateOrConnectWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput)
], ProductCreateOrConnectWithoutRatingInput.prototype, "create", void 0);
exports.ProductCreateOrConnectWithoutRatingInput = ProductCreateOrConnectWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutRatingInput", {})
], ProductCreateOrConnectWithoutRatingInput);
