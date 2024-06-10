"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_1 = require("../../../models/Product");
const Rating_1 = require("../../../models/Rating");
const helpers_1 = require("../../../helpers");
let RatingRelationsResolver = class RatingRelationsResolver {
    async product(rating, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findUniqueOrThrow({
            where: {
                id: rating.id,
            },
        }).product({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.RatingRelationsResolver = RatingRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Rating_1.Rating, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingRelationsResolver.prototype, "product", null);
exports.RatingRelationsResolver = RatingRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], RatingRelationsResolver);
