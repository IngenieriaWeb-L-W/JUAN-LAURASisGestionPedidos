"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutRatingNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutRatingInput_1 = require("../inputs/ProductCreateOrConnectWithoutRatingInput");
const ProductCreateWithoutRatingInput_1 = require("../inputs/ProductCreateWithoutRatingInput");
const ProductUpdateToOneWithWhereWithoutRatingInput_1 = require("../inputs/ProductUpdateToOneWithWhereWithoutRatingInput");
const ProductUpsertWithoutRatingInput_1 = require("../inputs/ProductUpsertWithoutRatingInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutRatingNestedInput = class ProductUpdateOneRequiredWithoutRatingNestedInput {
};
exports.ProductUpdateOneRequiredWithoutRatingNestedInput = ProductUpdateOneRequiredWithoutRatingNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutRatingInput_1.ProductCreateWithoutRatingInput)
], ProductUpdateOneRequiredWithoutRatingNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutRatingInput_1.ProductCreateOrConnectWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutRatingInput_1.ProductCreateOrConnectWithoutRatingInput)
], ProductUpdateOneRequiredWithoutRatingNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutRatingInput_1.ProductUpsertWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutRatingInput_1.ProductUpsertWithoutRatingInput)
], ProductUpdateOneRequiredWithoutRatingNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutRatingNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutRatingInput_1.ProductUpdateToOneWithWhereWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateToOneWithWhereWithoutRatingInput_1.ProductUpdateToOneWithWhereWithoutRatingInput)
], ProductUpdateOneRequiredWithoutRatingNestedInput.prototype, "update", void 0);
exports.ProductUpdateOneRequiredWithoutRatingNestedInput = ProductUpdateOneRequiredWithoutRatingNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutRatingNestedInput", {})
], ProductUpdateOneRequiredWithoutRatingNestedInput);
