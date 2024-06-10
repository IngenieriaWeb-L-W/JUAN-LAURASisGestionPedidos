"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCategoryArgs_1 = require("./args/AggregateCategoryArgs");
const CreateManyCategoryArgs_1 = require("./args/CreateManyCategoryArgs");
const CreateOneCategoryArgs_1 = require("./args/CreateOneCategoryArgs");
const DeleteManyCategoryArgs_1 = require("./args/DeleteManyCategoryArgs");
const DeleteOneCategoryArgs_1 = require("./args/DeleteOneCategoryArgs");
const FindFirstCategoryArgs_1 = require("./args/FindFirstCategoryArgs");
const FindFirstCategoryOrThrowArgs_1 = require("./args/FindFirstCategoryOrThrowArgs");
const FindManyCategoryArgs_1 = require("./args/FindManyCategoryArgs");
const FindUniqueCategoryArgs_1 = require("./args/FindUniqueCategoryArgs");
const FindUniqueCategoryOrThrowArgs_1 = require("./args/FindUniqueCategoryOrThrowArgs");
const GroupByCategoryArgs_1 = require("./args/GroupByCategoryArgs");
const UpdateManyCategoryArgs_1 = require("./args/UpdateManyCategoryArgs");
const UpdateOneCategoryArgs_1 = require("./args/UpdateOneCategoryArgs");
const UpsertOneCategoryArgs_1 = require("./args/UpsertOneCategoryArgs");
const helpers_1 = require("../../../helpers");
const Category_1 = require("../../../models/Category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCategory_1 = require("../../outputs/AggregateCategory");
const CategoryGroupBy_1 = require("../../outputs/CategoryGroupBy");
let CategoryCrudResolver = class CategoryCrudResolver {
    async aggregateCategory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).category.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategoryOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async categories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCategory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CategoryCrudResolver = CategoryCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCategory_1.AggregateCategory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCategoryArgs_1.AggregateCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "aggregateCategory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCategoryArgs_1.CreateManyCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "createManyCategory", null);
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
], CategoryCrudResolver.prototype, "createOneCategory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCategoryArgs_1.DeleteManyCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "deleteManyCategory", null);
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
], CategoryCrudResolver.prototype, "deleteOneCategory", null);
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
], CategoryCrudResolver.prototype, "findFirstCategory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoryOrThrowArgs_1.FindFirstCategoryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "findFirstCategoryOrThrow", null);
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
], CategoryCrudResolver.prototype, "categories", null);
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
], CategoryCrudResolver.prototype, "category", null);
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
], CategoryCrudResolver.prototype, "getCategory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CategoryGroupBy_1.CategoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCategoryArgs_1.GroupByCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "groupByCategory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCategoryArgs_1.UpdateManyCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "updateManyCategory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCategoryArgs_1.UpdateOneCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "updateOneCategory", null);
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
], CategoryCrudResolver.prototype, "upsertOneCategory", null);
exports.CategoryCrudResolver = CategoryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CategoryCrudResolver);
