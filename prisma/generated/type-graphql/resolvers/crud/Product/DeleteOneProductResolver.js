"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneProductArgs_1 = require("./args/DeleteOneProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let DeleteOneProductResolver = class DeleteOneProductResolver {
    async deleteOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneProductResolver = DeleteOneProductResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProductArgs_1.DeleteOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneProductResolver.prototype, "deleteOneProduct", null);
exports.DeleteOneProductResolver = DeleteOneProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], DeleteOneProductResolver);
