"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneProductArgs_1 = require("./args/UpdateOneProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let UpdateOneProductResolver = class UpdateOneProductResolver {
    async updateOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneProductResolver = UpdateOneProductResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProductArgs_1.UpdateOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneProductResolver.prototype, "updateOneProduct", null);
exports.UpdateOneProductResolver = UpdateOneProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], UpdateOneProductResolver);
