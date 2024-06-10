"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoryOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCategoryOrThrowArgs_1 = require("./args/FindUniqueCategoryOrThrowArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let FindUniqueCategoryOrThrowResolver = class FindUniqueCategoryOrThrowResolver {
    async getCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCategoryOrThrowResolver = FindUniqueCategoryOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoryOrThrowArgs_1.FindUniqueCategoryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCategoryOrThrowResolver.prototype, "getCategory", null);
exports.FindUniqueCategoryOrThrowResolver = FindUniqueCategoryOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], FindUniqueCategoryOrThrowResolver);
