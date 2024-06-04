"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProductArgs_1 = require("./args/AggregateProductArgs");
const Product_1 = require("../../../models/Product");
const AggregateProduct_1 = require("../../outputs/AggregateProduct");
const helpers_1 = require("../../../helpers");
let AggregateProductResolver = class AggregateProductResolver {
    async aggregateProduct(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateProductResolver = AggregateProductResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_1.AggregateProduct, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProductArgs_1.AggregateProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProductResolver.prototype, "aggregateProduct", null);
exports.AggregateProductResolver = AggregateProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], AggregateProductResolver);
