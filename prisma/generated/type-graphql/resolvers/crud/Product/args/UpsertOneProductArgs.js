"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateInput_1 = require("../../../inputs/ProductCreateInput");
const ProductUpdateInput_1 = require("../../../inputs/ProductUpdateInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let UpsertOneProductArgs = class UpsertOneProductArgs {
};
exports.UpsertOneProductArgs = UpsertOneProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], UpsertOneProductArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateInput_1.ProductCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateInput_1.ProductCreateInput)
], UpsertOneProductArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateInput_1.ProductUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateInput_1.ProductUpdateInput)
], UpsertOneProductArgs.prototype, "update", void 0);
exports.UpsertOneProductArgs = UpsertOneProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProductArgs);
