"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCategoryArgs_1 = require("./args/FindFirstCategoryArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let FindFirstCategoryResolver = class FindFirstCategoryResolver {
    async findFirstCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCategoryResolver = FindFirstCategoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoryArgs_1.FindFirstCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCategoryResolver.prototype, "findFirstCategory", null);
exports.FindFirstCategoryResolver = FindFirstCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], FindFirstCategoryResolver);
