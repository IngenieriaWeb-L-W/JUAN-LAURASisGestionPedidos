"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCategoryArgs_1 = require("./args/CreateOneCategoryArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let CreateOneCategoryResolver = class CreateOneCategoryResolver {
    async createOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneCategoryResolver = CreateOneCategoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCategoryArgs_1.CreateOneCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCategoryResolver.prototype, "createOneCategory", null);
exports.CreateOneCategoryResolver = CreateOneCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CreateOneCategoryResolver);
