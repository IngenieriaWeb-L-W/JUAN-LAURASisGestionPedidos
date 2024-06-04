"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProductArgs_1 = require("./args/AggregateProductArgs");
const CreateManyProductArgs_1 = require("./args/CreateManyProductArgs");
const CreateOneProductArgs_1 = require("./args/CreateOneProductArgs");
const DeleteManyProductArgs_1 = require("./args/DeleteManyProductArgs");
const DeleteOneProductArgs_1 = require("./args/DeleteOneProductArgs");
const FindFirstProductArgs_1 = require("./args/FindFirstProductArgs");
const FindFirstProductOrThrowArgs_1 = require("./args/FindFirstProductOrThrowArgs");
const FindManyProductArgs_1 = require("./args/FindManyProductArgs");
const FindUniqueProductArgs_1 = require("./args/FindUniqueProductArgs");
const FindUniqueProductOrThrowArgs_1 = require("./args/FindUniqueProductOrThrowArgs");
const GroupByProductArgs_1 = require("./args/GroupByProductArgs");
const UpdateManyProductArgs_1 = require("./args/UpdateManyProductArgs");
const UpdateOneProductArgs_1 = require("./args/UpdateOneProductArgs");
const UpsertOneProductArgs_1 = require("./args/UpsertOneProductArgs");
const helpers_1 = require("../../../helpers");
const Product_1 = require("../../../models/Product");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProduct_1 = require("../../outputs/AggregateProduct");
const ProductGroupBy_1 = require("../../outputs/ProductGroupBy");
let ProductCrudResolver = class ProductCrudResolver {
    async aggregateProduct(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProductOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async products(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByProduct(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ProductCrudResolver = ProductCrudResolver;
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
], ProductCrudResolver.prototype, "aggregateProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProductArgs_1.CreateManyProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "createManyProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProductArgs_1.CreateOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "createOneProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProductArgs_1.DeleteManyProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "deleteManyProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProductArgs_1.DeleteOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "deleteOneProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProductArgs_1.FindFirstProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "findFirstProduct", null);
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
], ProductCrudResolver.prototype, "findFirstProductOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProductArgs_1.FindManyProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "products", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProductArgs_1.FindUniqueProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "product", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProductOrThrowArgs_1.FindUniqueProductOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "getProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProductGroupBy_1.ProductGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProductArgs_1.GroupByProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "groupByProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProductArgs_1.UpdateManyProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "updateManyProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProductArgs_1.UpdateOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "updateOneProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProductArgs_1.UpsertOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "upsertOneProduct", null);
exports.ProductCrudResolver = ProductCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductCrudResolver);
