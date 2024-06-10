"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCategoryArgs_1 = require("./args/GroupByCategoryArgs");
const Category_1 = require("../../../models/Category");
const CategoryGroupBy_1 = require("../../outputs/CategoryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCategoryResolver = class GroupByCategoryResolver {
    async groupByCategory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByCategoryResolver = GroupByCategoryResolver;
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
], GroupByCategoryResolver.prototype, "groupByCategory", null);
exports.GroupByCategoryResolver = GroupByCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], GroupByCategoryResolver);
