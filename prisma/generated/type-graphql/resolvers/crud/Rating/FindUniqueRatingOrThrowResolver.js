"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRatingOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRatingOrThrowArgs_1 = require("./args/FindUniqueRatingOrThrowArgs");
const Rating_1 = require("../../../models/Rating");
const helpers_1 = require("../../../helpers");
let FindUniqueRatingOrThrowResolver = class FindUniqueRatingOrThrowResolver {
    async getRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueRatingOrThrowResolver = FindUniqueRatingOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rating_1.Rating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRatingOrThrowArgs_1.FindUniqueRatingOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRatingOrThrowResolver.prototype, "getRating", null);
exports.FindUniqueRatingOrThrowResolver = FindUniqueRatingOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], FindUniqueRatingOrThrowResolver);
