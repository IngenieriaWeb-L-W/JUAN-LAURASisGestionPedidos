"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCategoryArgs_1 = require("./args/CreateManyCategoryArgs");
const Category_1 = require("../../../models/Category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCategoryResolver = class CreateManyCategoryResolver {
    async createManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyCategoryResolver = CreateManyCategoryResolver;
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
], CreateManyCategoryResolver.prototype, "createManyCategory", null);
exports.CreateManyCategoryResolver = CreateManyCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CreateManyCategoryResolver);
