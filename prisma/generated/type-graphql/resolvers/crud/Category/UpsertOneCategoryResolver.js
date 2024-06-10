"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCategoryArgs_1 = require("./args/UpsertOneCategoryArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let UpsertOneCategoryResolver = class UpsertOneCategoryResolver {
    async upsertOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneCategoryResolver = UpsertOneCategoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCategoryArgs_1.UpsertOneCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCategoryResolver.prototype, "upsertOneCategory", null);
exports.UpsertOneCategoryResolver = UpsertOneCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], UpsertOneCategoryResolver);
