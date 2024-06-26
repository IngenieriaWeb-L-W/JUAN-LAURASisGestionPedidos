"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyAccountArgs_1 = require("./args/UpdateManyAccountArgs");
const Account_1 = require("../../../models/Account");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAccountResolver = class UpdateManyAccountResolver {
    async updateManyAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyAccountResolver = UpdateManyAccountResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAccountArgs_1.UpdateManyAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAccountResolver.prototype, "updateManyAccount", null);
exports.UpdateManyAccountResolver = UpdateManyAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], UpdateManyAccountResolver);
