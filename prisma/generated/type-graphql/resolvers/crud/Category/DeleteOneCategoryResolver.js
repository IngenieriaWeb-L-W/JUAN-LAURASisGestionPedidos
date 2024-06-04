"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCategoryArgs_1 = require("./args/DeleteOneCategoryArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let DeleteOneCategoryResolver = class DeleteOneCategoryResolver {
    async deleteOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneCategoryResolver = DeleteOneCategoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCategoryArgs_1.DeleteOneCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCategoryResolver.prototype, "deleteOneCategory", null);
exports.DeleteOneCategoryResolver = DeleteOneCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], DeleteOneCategoryResolver);
