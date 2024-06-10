"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Category_1 = require("../../../models/Category");
const Product_1 = require("../../../models/Product");
const CategoryProductsArgs_1 = require("./args/CategoryProductsArgs");
const helpers_1 = require("../../../helpers");
let CategoryRelationsResolver = class CategoryRelationsResolver {
    async products(category, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            where: {
                id: category.id,
            },
        }).products({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CategoryRelationsResolver = CategoryRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category, Object, Object, CategoryProductsArgs_1.CategoryProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryRelationsResolver.prototype, "products", null);
exports.CategoryRelationsResolver = CategoryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CategoryRelationsResolver);
