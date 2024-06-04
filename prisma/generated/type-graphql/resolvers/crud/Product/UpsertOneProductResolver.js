"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneProductArgs_1 = require("./args/UpsertOneProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let UpsertOneProductResolver = class UpsertOneProductResolver {
    async upsertOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneProductResolver = UpsertOneProductResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProductArgs_1.UpsertOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProductResolver.prototype, "upsertOneProduct", null);
exports.UpsertOneProductResolver = UpsertOneProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], UpsertOneProductResolver);
