"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateInput_1 = require("../../../inputs/ProductUpdateInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let UpdateOneProductArgs = class UpdateOneProductArgs {
};
exports.UpdateOneProductArgs = UpdateOneProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateInput_1.ProductUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateInput_1.ProductUpdateInput)
], UpdateOneProductArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], UpdateOneProductArgs.prototype, "where", void 0);
exports.UpdateOneProductArgs = UpdateOneProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProductArgs);
