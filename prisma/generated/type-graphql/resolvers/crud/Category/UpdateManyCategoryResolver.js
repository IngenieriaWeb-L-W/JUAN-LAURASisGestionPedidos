"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCategoryArgs_1 = require("./args/UpdateManyCategoryArgs");
const Category_1 = require("../../../models/Category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCategoryResolver = class UpdateManyCategoryResolver {
    async updateManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyCategoryResolver = UpdateManyCategoryResolver;
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
], UpdateManyCategoryResolver.prototype, "updateManyCategory", null);
exports.UpdateManyCategoryResolver = UpdateManyCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], UpdateManyCategoryResolver);
