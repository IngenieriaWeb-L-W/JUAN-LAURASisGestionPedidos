"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCategoryArgs_1 = require("./args/FindManyCategoryArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let FindManyCategoryResolver = class FindManyCategoryResolver {
    async categories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyCategoryResolver = FindManyCategoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Category_1.Category], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCategoryArgs_1.FindManyCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCategoryResolver.prototype, "categories", null);
exports.FindManyCategoryResolver = FindManyCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], FindManyCategoryResolver);
