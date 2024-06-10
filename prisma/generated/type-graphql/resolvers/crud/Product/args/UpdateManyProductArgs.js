"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateManyMutationInput_1 = require("../../../inputs/ProductUpdateManyMutationInput");
const ProductWhereInput_1 = require("../../../inputs/ProductWhereInput");
let UpdateManyProductArgs = class UpdateManyProductArgs {
};
exports.UpdateManyProductArgs = UpdateManyProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput)
], UpdateManyProductArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], UpdateManyProductArgs.prototype, "where", void 0);
exports.UpdateManyProductArgs = UpdateManyProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProductArgs);
