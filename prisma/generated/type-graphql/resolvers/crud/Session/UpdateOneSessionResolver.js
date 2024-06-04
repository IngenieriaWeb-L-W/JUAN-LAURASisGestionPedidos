"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneSessionArgs_1 = require("./args/UpdateOneSessionArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let UpdateOneSessionResolver = class UpdateOneSessionResolver {
    async updateOneSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).session.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneSessionResolver = UpdateOneSessionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSessionArgs_1.UpdateOneSessionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSessionResolver.prototype, "updateOneSession", null);
exports.UpdateOneSessionResolver = UpdateOneSessionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], UpdateOneSessionResolver);