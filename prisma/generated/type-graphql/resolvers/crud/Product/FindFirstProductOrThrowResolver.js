"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProductOrThrowArgs_1 = require("./args/FindFirstProductOrThrowArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let FindFirstProductOrThrowResolver = class FindFirstProductOrThrowResolver {
    async findFirstProductOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstProductOrThrowResolver = FindFirstProductOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProductOrThrowArgs_1.FindFirstProductOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProductOrThrowResolver.prototype, "findFirstProductOrThrow", null);
exports.FindFirstProductOrThrowResolver = FindFirstProductOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], FindFirstProductOrThrowResolver);
