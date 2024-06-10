"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyProductArgs_1 = require("./args/FindManyProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let FindManyProductResolver = class FindManyProductResolver {
    async products(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyProductResolver = FindManyProductResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProductArgs_1.FindManyProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProductResolver.prototype, "products", null);
exports.FindManyProductResolver = FindManyProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], FindManyProductResolver);
