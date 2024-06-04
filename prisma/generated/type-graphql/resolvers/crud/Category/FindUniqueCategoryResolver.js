"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCategoryArgs_1 = require("./args/FindUniqueCategoryArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let FindUniqueCategoryResolver = class FindUniqueCategoryResolver {
    async category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCategoryResolver = FindUniqueCategoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoryArgs_1.FindUniqueCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCategoryResolver.prototype, "category", null);
exports.FindUniqueCategoryResolver = FindUniqueCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], FindUniqueCategoryResolver);
